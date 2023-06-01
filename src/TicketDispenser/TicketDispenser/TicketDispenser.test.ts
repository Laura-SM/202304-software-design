import TicketDispenser from './TicketDispenser';
import TurnNumberSequence from '../TurnNumberSequence/TurnNumberSequence';
import { Sequence } from '../types';

describe('Given a Turn Ticket Dispenser', () => {
  let turnNumberSequence: Sequence<number>;
  // Instead of using the implementation of the class TurnNumberSequence, it is better to create a mock class. Doing this, if class TurnNumberSequence fails, the tests will continue to pass.
  beforeEach(() => {
    turnNumberSequence = new TurnNumberSequence();
  });

  describe('when TurnTicketDispenser is instantiated', () => {
    test('then the ticket number should be 0', () => {
      const dispenser = new TicketDispenser(turnNumberSequence);
      const ticket = dispenser.getTurnTicket();

      expect(ticket.getTurnNumber()).toBe(0);
    });
  });

  describe('when two Ticket Dispenser are instantiated', () => {
    test('then the ticket number should not be repeated', () => {
      const dispenserA = new TicketDispenser(turnNumberSequence);
      const dispenserB = new TicketDispenser(turnNumberSequence);

      const ticketA = dispenserA.getTurnTicket();
      const ticketB = dispenserB.getTurnTicket();

      expect(ticketA.getTurnNumber()).toBe(0);
      expect(ticketB.getTurnNumber()).toBe(1);
    });
  });
});
