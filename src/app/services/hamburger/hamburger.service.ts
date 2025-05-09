// src/app/services/hamburger.service.ts
import { Injectable } from '@angular/core';
import { BreadModel, HamburgerModel, IngredientModel } from '@model/hamburger.model';
//import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HamburgerService {
  private hamburgers: HamburgerModel[] = [];
  private ingredients: IngredientModel[] = [];
  private breads: BreadModel[] = [];
  //private apiUrl = 'https://inscripciones.cl:4000/hamburgers';

  constructor(
    //private http: HttpClient
  ) {
    this.hamburgers = [
      {
        id: 1, title: 'Cheeseburger', availableFrom: new Date('2023-01-01'),
        price: 0,
        ingredients: [],
        bread: ''
      },
      {
        id: 2, title: 'Veggie Burger', availableFrom: new Date('2023-02-01'),
        price: 0,
        ingredients: [],
        bread: ''
      },
      {
        id: 3, title: 'Chicken Burger', availableFrom: new Date('2023-03-01'),
        price: 0,
        ingredients: [],
        bread: ''
      },
    ];
    this.ingredients = [
      { code: 'tomato', label: 'Tomate' },
      { code: 'lettuce', label: 'Lechuga' },
      { code: 'onion', label: 'Cebolla' },
      { code: 'cheese', label: 'Queso' },
      { code: 'bacon', label: 'Beacon' },
      { code: 'pickles', label: 'Pepinillos' },
    ];
    this.breads = [
      { code: 'white', label: 'Pan Blanco' },
      { code: 'whole', label: 'Pan Integral' },
      { code: 'garlic', label: 'Pan de Ajo' },
      { code: 'burger', label: 'Pan de Hamburguesa' },
    ];
  }
/*
  getHamburgersFromServer(): Promise<any> {
    return new Promise((resolve) => {
      this.http.get<HamburgerModel[]>(this.apiUrl).subscribe(data => {
        resolve(data);
      });
    });
  }
*/
  getHamburgers(): HamburgerModel[] {
    return this.hamburgers;
  }

  getIngredients(): IngredientModel[] {
    return this.ingredients;
  }

  getBreads(): BreadModel[] {
    return this.breads;
  }

  getHamburgerById(id: number): HamburgerModel | undefined {
    return this.hamburgers.find(b => b.id === id);
  }

  addHamburger(hamburger: HamburgerModel): void {
    hamburger.id = this.hamburgers.length + 1; // Simple ID generation
    this.hamburgers.push(hamburger);
  }

  updateHamburger(updatedHamburger: HamburgerModel): void {
    const index = this.hamburgers.findIndex(b => b.id === updatedHamburger.id);
    if (index !== -1) {
      this.hamburgers[index] = updatedHamburger;
    }
  }

  deleteHamburger(id: number): void {
    this.hamburgers = this.hamburgers.filter(b => b.id !== id);
    console.log('Hamburger deleted:', id);
    console.log('Hamburgers:', this.hamburgers);
  }
}