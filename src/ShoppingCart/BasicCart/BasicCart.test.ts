import ProductCollection from '../ProductCollection/ProductCollection';
import TaxableProduct from '../TaxableProduct/TaxableProduct';
import { Cart, Product } from '../types';

abstract class BasicCart implements Cart<ProductCollection, Product> {
  readonly products: ProductCollection;

  constructor(productsCollection: ProductCollection) {
    this.products = productsCollection;
  }

  add(item: Product): void {
    this.products.add(item);
  }

  remove(id: string): void {
    this.products.remove(id);
  }

  empty(): void {
    this.products.empty();
  }

  abstract calculateTotalBasePrice (): number

  abstract calculateTotalTaxes() : number

  abstract calculateTotalPrice(): number
}

const name = 'Computer';
const basePrice = 600;
const taxes = 10;
const productsList = [
  new TaxableProduct({ id: '123abc', name, basePrice, taxes }),
  new TaxableProduct({ id: '234abc', name, basePrice, taxes }),
  new TaxableProduct({ id: '345abc', name, basePrice, taxes }),
];

describe('Given a BasicCart', () => {
  describe('when it is defined', () => {
    test('then it should be a function', () => {
      expect(typeof BasicCart).toBe('function');
    });
  });

  describe('when a product is added to the cart', () => {
    test('then products should be incremented by one', () => {
      const myProductCollection = new ProductCollection(productsList);
      class SuperBasicCart extends BasicCart {
        calculateTotalBasePrice(): number {
          throw new Error('Method not implemented.');
        }

        calculateTotalTaxes(): number {
          throw new Error('Method not implemented.');
        }

        calculateTotalPrice(): number {
          throw new Error('Method not implemented.');
        }
      }

      const myBasicCart = new SuperBasicCart(myProductCollection);
      const newProduct = new TaxableProduct({ id: '444abc', name, basePrice, taxes });

      myBasicCart.add(newProduct);

      expect(myBasicCart.products.size()).toBe(4);
    });
  });

  // Describe('when a product is removed from the cart', () => {
  //   test('then products should be decreased by one', () => {
  //     const myProductCollection = new ProductCollection(productsList);
  //     const myBasicCart = new BasicCart(myProductCollection);
  //     myBasicCart.remove('345abc');

  //     expect(myBasicCart.products.size()).toBe(2);
  //   });
  // });

  // describe('when the cart is emptied', () => {
  //   test('then products size should be 0', () => {
  //     const myProductCollection = new ProductCollection(productsList);
  //     const myBasicCart = new BasicCart(myProductCollection);
  //     myBasicCart.empty();

  //     expect(myBasicCart.products.size()).toBe(0);
  //   });
  // });
});
