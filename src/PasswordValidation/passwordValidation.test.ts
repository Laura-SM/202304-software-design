import { passwordValidation } from './passwordValidation';

describe('Given a password validation function,', () => {
  describe('when it is defined,', () => {
    test('then it should be a function', () => {
      expect(passwordValidation).toBeInstanceOf(Function);
    });
  });

  describe('when implemented with a password with less than 8 characters,', () => {
    test('then a minimum8Characters error message should be returned', () => {
      expect(passwordValidation('-LEss08'))
        .toStrictEqual(
          {
            isValidPassword: false,
            validationErrors: 'Password must be at least 8 characters',
          },
        );
    });
  });

  describe('when implemented with a password with less than 2 numbers,', () => {
    test('then a minimum2Numbers error message should be returned', () => {
      expect(passwordValidation('-LEss2numbers'))
        .toStrictEqual(
          {
            isValidPassword: false,
            validationErrors: 'The password must contain at least 2 numbers',
          },
        );
    });
  });

  describe('when implemented with a password with less than 8 characters and less than 2 numbers,', () => {
    test('then minimum8Characters error message and minimum2Numbers error message should be returned', () => {
      expect(passwordValidation('-LEss8c'))
        .toStrictEqual(
          {
            isValidPassword: false,
            validationErrors: 'Password must be at least 8 characters\nThe password must contain at least 2 numbers',
          },
        );
    });
  });

  describe('when implemented with a password with less than 1 capital letter,', () => {
    test('then a minimum1CapitalLetter error message should be returned', () => {
      expect(passwordValidation('-less01capitalletter'))
        .toStrictEqual(
          {
            isValidPassword: false,
            validationErrors: 'Password must contain at least one capital letter',
          },
        );
    });
  });

  describe('when implemented with a password with less than 1 special character,', () => {
    test('then a minimum1SpecialCharacter error message should be returned', () => {
      expect(passwordValidation('LEss01SpecialCharacter'))
        .toStrictEqual(
          {
            isValidPassword: false,
            validationErrors: 'Password must contain at least one special character',
          },
        );
    });
  });
});
