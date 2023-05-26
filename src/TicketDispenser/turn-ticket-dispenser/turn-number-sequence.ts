import { Sequence } from './types';

class TurnNumberSequence implements Sequence<number> {
  private turnNumber: number;

  constructor() {
    this.turnNumber = 0;
  }

  getNextValue(): number {
    return this.turnNumber++;
  }
}

export default TurnNumberSequence;

