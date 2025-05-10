import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BreadModel, HamburgerModel, IngredientModel } from '@model/hamburger.model';
import { HamburgerService } from '@service/hamburger/hamburger.service';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';

@Component({
  selector: 'app-hamburger-edit',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatButtonModule,
    CommonModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatDatepickerModule
  ],
  templateUrl: './hamburger-edit.component.html',
  styleUrl: './hamburger-edit.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HamburgerEditComponent {
  public hamburgerForm: FormGroup;
  public ingredientOptions: IngredientModel[] = [];
  public breadOptions: BreadModel[] = [];
  readonly data = inject<any>(MAT_DIALOG_DATA);
  
  constructor(
    public fb: FormBuilder,
    public dialogRef: MatDialogRef<HamburgerEditComponent>,
    public hamburgerService: HamburgerService,
  ) {
    this.hamburgerForm = this.fb.group({
      'title': ['', Validators.required],
      'availableFrom': ['', Validators.required],
      'price': [0, Validators.compose([Validators.required, Validators.min(0)])],
      'ingredients': [[]],
      'bread': ['', Validators.required],
    });
    this.breadOptions = this.hamburgerService.getBreads();
    this.ingredientOptions = this.hamburgerService.getIngredients();
    this.loadHamburger();
  }

  loadHamburger(): void {
    if (this.data.id !== undefined) {
      const hamburger = this.hamburgerService.getHamburgerById(this.data.id);
      if (hamburger) {
        this.hamburgerForm.patchValue({
          title: hamburger.title,
          availableFrom: hamburger.availableFrom,
          price: hamburger.price,
          ingredients: hamburger.ingredients,
          bread: hamburger.bread
        });
      }
    }
  }

  save(): void {
    if (this.hamburgerForm.valid) {
      const newHamburger: HamburgerModel = {
        id: this.data.id !== undefined ? this.data.id : 0,
        title: this.hamburgerForm.value.title,
        availableFrom: new Date(this.hamburgerForm.value.availableFrom),
        price: this.hamburgerForm.value.price,
        ingredients: this.hamburgerForm.value.ingredients,
        bread: this.hamburgerForm.value.bread
      };
      if (this.data.id !== undefined) {
        this.hamburgerService.updateHamburger(newHamburger);
      } else {
        this.hamburgerService.addHamburger(newHamburger);
      }
      this.dialogRef.close(newHamburger);
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }
}