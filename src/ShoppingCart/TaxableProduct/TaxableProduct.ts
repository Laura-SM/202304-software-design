import { Product } from '../types';

export type TaxableProductParameters = {
  id: string,
  name: string,
  basePrice: number,
  taxes: number
}

class TaxableProduct implements Product {
  #id: string;
  #name: string;
  #basePrice: number;
  #taxes: number;

  constructor({ id, name, basePrice, taxes }: TaxableProductParameters) {
    if (id === undefined) {
      throw new Error('Id is required');
    }

    if (name === undefined) {
      throw new Error('Name is required');
    }

    this.#id = id;
    this.#name = name;
    this.#basePrice = basePrice;
    this.#taxes = taxes;
  }

  getBasePrice(): number {
    return this.#basePrice;
  }

  getTotalPrice(): number {
    return this.#basePrice + this.getTax();
  }

  getTax(): number {
    return this.#basePrice * this.#taxes / 100;
  }

  getName(): string {
    return this.#name;
  }

  getId(): string {
    return this.#id;
  }
}

export default TaxableProduct;
