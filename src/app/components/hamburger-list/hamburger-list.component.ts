import { Component, inject, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule, MatTable } from '@angular/material/table';
import { HamburgerModel } from '@model/hamburger.model';
import { HamburgerService } from '@service/hamburger/hamburger.service';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { HamburgerEditComponent } from '@component/hamburger-edit/hamburger-edit.component';

@Component({
  selector: 'app-hamburger-list',
  imports: [
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    CommonModule,
  ],
  templateUrl: './hamburger-list.component.html',
  styleUrl: './hamburger-list.component.scss'
})

export class HamburgerListComponent {
  hamburgers: HamburgerModel[] = [];
  displayedColumns: string[] = [
    'id',
    'title',
    'availableFrom',
    'price',
    'actions'
  ];
  @ViewChild(MatTable) table!: MatTable<HamburgerModel>;

  readonly dialog = inject(MatDialog);

  constructor(private hamburgerService: HamburgerService) {
    this.hamburgers = this.hamburgerService.getHamburgers();
  }

  editHamburger(id?: number): void {
    const dialogRef = this.dialog.open(HamburgerEditComponent, {
      data: { id: id },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.hamburgers = this.hamburgerService.getHamburgers();
        this.table.renderRows();
      }
    });
  }

  deleteHamburger(id: number): void {
    this.hamburgerService.deleteHamburger(id);
    this.hamburgers = this.hamburgerService.getHamburgers();
    this.table.renderRows();

  }
}