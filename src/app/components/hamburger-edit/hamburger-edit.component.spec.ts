import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HamburgerEditComponent } from './hamburger-edit.component';
import { FormBuilder } from '@angular/forms';
import { HamburgerService } from '@service/hamburger/hamburger.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core'; 

describe('HamburgerEditComponent', () => {
  let component: HamburgerEditComponent;
  let fixture: ComponentFixture<HamburgerEditComponent>;
  let hamburgerServiceMock: jasmine.SpyObj<HamburgerService>;

  const mockData = { id: 1 }; 
  beforeEach(async () => {
    hamburgerServiceMock = jasmine.createSpyObj('HamburgerService', ['getBreads', 'getIngredients', 'getHamburgerById', 'updateHamburger', 'addHamburger']);

    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        MatDatepickerModule,
        MatNativeDateModule
      ],
      providers: [
        FormBuilder,
        { provide: HamburgerService, useValue: hamburgerServiceMock },
        { provide: MatDialogRef, useValue: { close: jasmine.createSpy('close') } }, 
        { provide: MAT_DIALOG_DATA, useValue: mockData }, 
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(HamburgerEditComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

});