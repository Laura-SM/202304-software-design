// Import TurnNumberSequence from './turn-number-sequence';
import TurnNumberSequence from './turn-number-sequence';
import TurnTicket from './turn-ticket';

class TicketDispenser {
  #turnNumber: TurnNumberSequence;

  constructor(turnNumbersSequence: TurnNumberSequence) {
    this.#turnNumber = turnNumbersSequence;
  }

  public getTurnTicket() {
    const newTurnNumber = this.#turnNumber.getNextTurnNumber();
    const newTurnTicket = new TurnTicket(newTurnNumber);

    return newTurnTicket;
  }
}

export default TicketDispenser;
