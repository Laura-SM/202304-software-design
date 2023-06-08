import TaxableProduct from './TaxableProduct';
import { TaxableProductParameters } from './TaxableProduct';

describe('Given a TaxableProduct,', () => {
  describe('when it is defined', () => {
    test('then it should be a function', () => {
      expect(typeof TaxableProduct).toBe('function');
    });
  });

  describe('when it do not receive an id', () => {
    test('then it should throw an error', () => {
      expect(() => new TaxableProduct({ id: undefined as unknown as string } as TaxableProductParameters)).toThrowError();
    });
  });

  describe('when it receives an id', () => {
    test('then it should have an id property', () => {
      const id = '123abc';
      const name = 'Computer';

      const myTaxableProduct = new TaxableProduct({ id, name } as TaxableProductParameters);

      expect(myTaxableProduct.getId()).toBe('123abc');
    });
  });

  describe('when it do not receive a name', () => {
    test('then it should throw an error', () => {
      const id = '123abc';
      const basePrice = 600;
      const taxes = 10;

      expect(() => new TaxableProduct({ id, name: undefined as unknown as string, basePrice, taxes })).toThrowError();
    });
  });

  describe('when it receives a name', () => {
    test('then getName should return the name', () => {
      const id = '123abc';
      const name = 'Computer';
      const basePrice = 600;
      const taxes = 10;

      const myTaxableProduct = new TaxableProduct({ id, name, basePrice, taxes });

      expect(myTaxableProduct.getName()).toBe('Computer');
    });
  });

  describe('when it receives a base price', () => {
    test('then getBasePrice should return the base price', () => {
      const id = '123abc';
      const name = 'Computer';
      const basePrice = 600;
      const taxes = 10;

      const myTaxableProduct = new TaxableProduct({ id, name, basePrice, taxes });

      expect(myTaxableProduct.getBasePrice()).toBe(600);
    });
  });

  describe('when it receives a tax of 10%', () => {
    test('then it should return the tax calculation for the product', () => {
      const id = '123abc';
      const name = 'Computer';
      const basePrice = 600;
      const taxes = 10;

      const myTaxableProduct = new TaxableProduct({ id, name, basePrice, taxes });

      expect(myTaxableProduct.getTax()).toBe(60);
    });
  });

  describe('when it receives a tax of 10% and a base price of 600', () => {
    test('then it should return the total price', () => {
      const id = '123abc';
      const name = 'Computer';
      const basePrice = 600;
      const taxes = 10;

      const myTaxableProduct = new TaxableProduct({ id, name, basePrice, taxes });

      expect(myTaxableProduct.getTotalPrice()).toBe(660);
    });
  });
});

