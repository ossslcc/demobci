export interface HamburgerModel {
  id: number;
  title: string;
  availableFrom: Date;
  price: number;
  ingredients: string[];
  bread: string;
}

export interface IngredientModel {
  code: string;
  label: string;
}

export interface BreadModel {
  code: string;
  label: string;
}