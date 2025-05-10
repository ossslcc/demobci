import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HamburgerListComponent } from './hamburger-list.component';
import { HamburgerService } from '@service/hamburger/hamburger.service';
import { MatDialog } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { HttpClientTestingModule } from '@angular/common/http/testing'; 
import { of } from 'rxjs';
import { HamburgerModel } from '@model/hamburger.model';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('HamburgerListComponent', () => {
  let component: HamburgerListComponent;
  let fixture: ComponentFixture<HamburgerListComponent>;
  let hamburgerServiceMock: jasmine.SpyObj<HamburgerService>;
  let dialogMock: jasmine.SpyObj<MatDialog>;

  beforeEach(async () => {
    hamburgerServiceMock = jasmine.createSpyObj('HamburgerService', ['getHamburgers', 'deleteHamburger']);
    dialogMock = jasmine.createSpyObj('MatDialog', ['open']);

    await TestBed.configureTestingModule({
      imports: [HamburgerListComponent, MatTableModule, HttpClientTestingModule], 
      providers: [
        { provide: HamburgerService, useValue: hamburgerServiceMock },
        { provide: MatDialog, useValue: dialogMock },
      ],
      schemas: [NO_ERRORS_SCHEMA] 
    }).compileComponents();

    fixture = TestBed.createComponent(HamburgerListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});