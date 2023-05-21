class BracketsExpressionChecker {
  stack: string[];
  openCharacters = ['(', '[', '{'];
  closeCharacters = [')', ']', '}'];

  constructor() {
    this.stack = [];
  }

  isOdd(expression: string): boolean {
    if (expression.length % 2 !== 0) {
      return false;
    }

    return true;
  }

  add(character: string): void {
    this.stack.push(character);
  }

  extract(): string | undefined {
    return this.stack.pop();
  }

  check(expression: string): void | boolean {
    let result = true;
    for (const character of expression) {
      if (this.openCharacters.includes(character)) {
        this.add(character);
      }

      if (this.closeCharacters.includes(character)) {
        const lastStackValue: string | undefined = this.extract();

        if (lastStackValue && this.closeCharacters.indexOf(character) !== this.openCharacters.indexOf(lastStackValue)) {
          console.log('passa per aqui o no');
          result = false;
          console.log('result', result);
          return result;
        }

        console.log('result', result);
      }

      console.log('result', result);
    }

    console.log('result', result);
    return result;
  }
}

export default BracketsExpressionChecker;
