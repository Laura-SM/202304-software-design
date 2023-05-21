import BracketsExpressionChecker from './BracketsExpressionChecker';

describe('Given a bracketsExpressionChecker function', () => {
  describe('When it receives a string with an odd length', () => {
    test('Then it should return false', () => {
      const newChecker = new BracketsExpressionChecker();
      const result = newChecker.isOdd('[()');
      expect(result).toBe(false);
    });
  });

  describe('When it receives a string ', () => {
    test('Then it should store the first character in the stack', () => {
      const newChecker = new BracketsExpressionChecker();
      newChecker.add('[');
      const lastValue = newChecker.extract();
      expect(lastValue).toBe('[');
    });
  });

  describe('When it receives an opening character', () => {
    test('Then it should add the character to the stack', () => {
      const newChecker = new BracketsExpressionChecker();
      newChecker.check('(');
      expect(newChecker.stack).toStrictEqual(['(']);
    });

    describe('When it receives an closing character', () => {
      test('Then it should extract the last value in the stack', () => {
        const newChecker = new BracketsExpressionChecker();
        newChecker.check('[');
        newChecker.check('(');
        newChecker.check(']');
        expect(newChecker.stack).toStrictEqual(['[']);
      });

      // TODO: check this test
      // test('Then it should check if the extracted character is the relative opening one and return true if correct', () => {
      //   const newChecker = new BracketsExpressionChecker();
      //   const result = newChecker.check('[]]');
      //   expect(result).toBe(false);
      // });
    });
  });
});
