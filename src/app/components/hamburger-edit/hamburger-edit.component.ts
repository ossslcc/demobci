import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BreadModel, HamburgerModel, IngredientModel } from '@model/hamburger.model';
import { HamburgerService } from '@service/hamburger/hamburger.service';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';
import { MatCheckbox } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { MatRadioButton } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';

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
    MatFormFieldModule, MatInputModule, MatDatepickerModule
  ],
  templateUrl: './hamburger-edit.component.html',
  styleUrl: './hamburger-edit.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HamburgerEditComponent {
  public hamburgerForm: FormGroup;
  public ingredientOptions: IngredientModel[] = [];
  public breadOptions: BreadModel[] = [];
  

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

  }


  save(): void {
    if (this.hamburgerForm.valid) {
      const newHamburger: HamburgerModel = {
        id: 0,
        title: this.hamburgerForm.value.title,
        availableFrom: new Date(this.hamburgerForm.value.availableFrom),
        price: this.hamburgerForm.value.price,
        ingredients: this.hamburgerForm.value.ingredients.map((code: string) => {
          return this.ingredientOptions.find(ingredient => ingredient.code === code)?.label;
        }).filter((label: string | undefined) => label !== undefined),
        bread: this.hamburgerForm.value.bread
      };
      this.hamburgerService.addHamburger(newHamburger);
      this.dialogRef.close(newHamburger);
    }
  }
  cancel(): void {
    this.dialogRef.close();
  }
}