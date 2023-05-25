import TicketDispenser from '../turn-ticket-dispenser/ticket-dispenser';
import TurnNumberSequence from '../turn-ticket-dispenser/turn-number-sequence';

describe('Given a Turn Ticket Dispenser', () => {
  let turnNumberSequence: TurnNumberSequence;

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
