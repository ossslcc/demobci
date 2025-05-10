import { Injectable } from '@angular/core';
import { BreadModel, HamburgerModel, IngredientModel } from '@model/hamburger.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HamburgerService {
  private hamburgers: HamburgerModel[] = [];
  private ingredients: IngredientModel[] = [];
  private breads: BreadModel[] = [];
  private apiUrl = 'https://oscardemobci.free.beeceptor.com/hamburgers';
  static getHamburgers: any;

  constructor(
    private http: HttpClient
  ) {
    this.initData();
  }

  initData() {
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
    
    this.http.get<HamburgerModel[]>(this.apiUrl).subscribe(data => {
      localStorage.setItem('data', JSON.stringify(data));
    });
  }

  getHamburgers(): HamburgerModel[] {
    const data = localStorage.getItem('data');
    if (data) {
      this.hamburgers = JSON.parse(data);
    }
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
    hamburger.id = this.hamburgers.length + 1;
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
  }
}