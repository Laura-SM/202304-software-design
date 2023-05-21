import { Collection, Product } from '../types';

class ProductCollection implements Collection<Product> {
  #elements: Map<string, Product>;

  constructor(products: Product[]) {
    this.#elements = new Map(products.map(product => [product.getId(), product]));
  }

  add(element: Product): void {
    this.#elements.set(element.getId(), element);
  }

  remove(id: string): void {
    this.#elements.delete(id);
  }

  empty(): void {
    this.#elements.clear();
  }

  size(): number {
    return this.#elements.size;
  }

  getList(): Product[] {
    return Array.from(this.#elements.values());
  }
}

export default ProductCollection;
