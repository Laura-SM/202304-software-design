import TaxableProduct from '../TaxableProduct/TaxableProduct';
import ProductCollection from './ProductCollection';

const name = 'Computer';
const basePrice = 600;
const taxes = 10;
const productsList = [
  new TaxableProduct({ id: '123abc', name, basePrice, taxes }),
  new TaxableProduct({ id: '234abc', name, basePrice, taxes }),
  new TaxableProduct({ id: '345abc', name, basePrice, taxes }),
];

describe('Given a ProductCollection', () => {
  describe('when it is defined', () => {
    test('then it should be a function', () => {
      expect(typeof ProductCollection).toBe('function');
    });
  });

  describe('when it receives 3 products', () => {
    test('then product collection size should be 3', () => {
      const myProductCollection = new ProductCollection(productsList);

      expect(myProductCollection.size()).toBe(3);
    });

    test('then it should return a list of 3 products', () => {
      const myProductCollection = new ProductCollection(productsList);
      const list = myProductCollection.getList();

      expect(typeof list).toBe('object');
      expect(list.length).toBe(3);
    });
  });

  describe('when a product is added to the list', () => {
    test('then size should be incremented by one', () => {
      const newProduct = new TaxableProduct({ id: '444abc', name, basePrice, taxes });
      const myProductCollection = new ProductCollection(productsList);
      myProductCollection.add(newProduct);

      expect(myProductCollection.size()).toBe(4);
    });
  });

  describe('when a product is removed form the list', () => {
    test('then the size should be decreased by one', () => {
      const myProductCollection = new ProductCollection(productsList);
      myProductCollection.remove('345abc');

      expect(myProductCollection.size()).toBe(2);
    });
  });

  describe('when the list is emptied', () => {
    test('then the size should be 0', () => {
      const myProductCollection = new ProductCollection(productsList);
      myProductCollection.empty();

      expect(myProductCollection.size()).toBe(0);
    });
  });
});
