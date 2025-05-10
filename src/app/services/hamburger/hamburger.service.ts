import { Injectable } from '@angular/core';
import { BreadModel, HamburgerModel, IngredientModel } from '@model/hamburger.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HamburgerService {
  private ingredients: IngredientModel[] = [];
  private breads: BreadModel[] = [];
  private apiUrl = 'https://oscardemobci.free.beeceptor.com/hamburgers';

  constructor(
    private http: HttpClient
  ) {
    this.initData();
  }

  initData() {
    this.ingredients = [
      { code: 'no_ingredients', label: 'Sin Ingredientes' },
      { code: 'tomato', label: 'Tomate' },
      { code: 'lettuce', label: 'Lechuga' },
      { code: 'onion', label: 'Cebolla' },
      { code: 'cheese', label: 'Queso' },
      { code: 'bacon', label: 'Beacon' },
      { code: 'pickles', label: 'Pepinillos' },
    ];
    this.breads = [
      { code: 'no_bread', label: 'Sin Pan' },
      { code: 'white', label: 'Pan Blanco' },
      { code: 'whole', label: 'Pan Integral' },
      { code: 'garlic', label: 'Pan de Ajo' },
      { code: 'burger', label: 'Pan de Hamburguesa' },
    ];
    
    this.http.get<HamburgerModel[]>(this.apiUrl).subscribe(data => {
      localStorage.setItem('data', JSON.stringify(data));
    });
  }

  getHamburgers(): Promise<HamburgerModel[]> {
    return new Promise((resolve) => {
      const checkStorage = setInterval(() => {
        const data = localStorage.getItem('data');
        if (data) {
          resolve(JSON.parse(data));
          clearInterval(checkStorage)
        }
      }, 200);
    });
  }

  getIngredients(): IngredientModel[] {
    return this.ingredients;
  }

  getBreads(): BreadModel[] {
    return this.breads;
  }

  getHamburgerById(id: number): HamburgerModel | undefined {
    const data = localStorage.getItem('data');
    const hamburgers = data ? JSON.parse(data) : [];
    return hamburgers.find((b: { id: number; }) => b.id === id);
  }

  addHamburger(hamburger: HamburgerModel): void {
    const data = localStorage.getItem('data');
    let hamburgers = data ? JSON.parse(data) : [];
    hamburger.id = hamburgers.length + 1;
    hamburgers.push(hamburger);
    localStorage.setItem('data', JSON.stringify(hamburgers));
  }

  updateHamburger(updatedHamburger: HamburgerModel): void {
    const data = localStorage.getItem('data');
    let hamburgers = data ? JSON.parse(data) : [];
    
    const index = hamburgers.findIndex((b: { id: number; }) => b.id === updatedHamburger.id);
    if (index !== -1) {
      hamburgers[index] = updatedHamburger;
      localStorage.setItem('data', JSON.stringify(hamburgers));
    }
  }

  deleteHamburger(id: number): void {
    const data = localStorage.getItem('data');
    let hamburgers = data ? JSON.parse(data) : [];
    hamburgers = hamburgers.filter((b: { id: number; }) => b.id !== id);
    localStorage.setItem('data', JSON.stringify(hamburgers));
  }
}