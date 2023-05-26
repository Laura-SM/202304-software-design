import { Sequence } from './types';
import TurnTicket from './turn-ticket';

class TicketDispenser {
  #turnNumber: Sequence<number>;

  constructor(turnNumberSequence: Sequence<number>) {
    this.#turnNumber = turnNumberSequence;
  }

  public getTurnTicket() {
    const newTurnNumber = this.#turnNumber.getNextValue();
    const newTurnTicket = new TurnTicket(newTurnNumber);

    return newTurnTicket;
  }
}

export default TicketDispenser;
