import { LinkedList } from './DoubleLinkedList';

describe('Given a Single Linked List', () => {
  test('When created, then it should be an empty list', () => {
    const list = new LinkedList();
    expect(list.size).toBe(0);
  });

  describe('When adding an element at the end', () => {
    test('Then the element should be on Tail and size should be increased', () => {
      const list = new LinkedList<number>();
      const value = 3;
      expect(list.size).toBe(0);
      list.insertAtEnd(value);
      expect(list.size).toBe(1);
      expect(list.tail).toBe(value);
      list.insertAtEnd(4);
      expect(list.tail).toBe(4);
    });

    test('and the element is a different type, then it should be added to the structure', () => {
      const list = new LinkedList<string>();
      const value = 'Hola';
      list.insertAtEnd(value);
      expect(list.size).toBe(1);
      expect(list.tail).toBe(value);
    });
  });

  describe('When adding an element at the beginning', () => {
    test('then it should be in the head and the size must be increased', () => {
      const list = new LinkedList<string>();
      const value = 'Example Value';
      list.insertAtBeginning(value);
      expect(list.size).toBe(1);
      expect(list.head).toBe(value);
    });
  });

  describe('When adding more than one element', () => {
    test('at the end, then head and tail must be different', () => {
      const list = new LinkedList<string>();
      list.insertAtEnd('First');
      list.insertAtEnd('Second');
      expect(list.size).toBe(2);
      expect(list.head).not.toBe(list.tail);
      expect(list.head).toBe('First');
    });

    test('at the beginning, then head and tail must be different', () => {
      const list = new LinkedList<string>();
      list.insertAtBeginning('First');
      list.insertAtBeginning('Second');
      expect(list.size).toBe(2);
      expect(list.head).not.toBe(list.tail);
      expect(list.tail).toBe('First');
    });
  });

  describe('When deleting an element, it should update its tail and size', () => {
    const list = new LinkedList<string>();
    list.insertAtBeginning('First');
    list.insertAtEnd('Second');
    list.insertAtEnd('Third');
    const value = list.delete();
    expect(value).toBe('First');
    expect(list.size).toBe(2);
    expect(list.head).toBe('Second');
  });

  test('Prints', () => {
    const list = new LinkedList<string>();
    list.insertAtBeginning('First');
    list.insertAtEnd('Second');
    list.insertAtEnd('Third');
    list.print();
  });

  test('Reverse prints', () => {
    const list = new LinkedList<string>();
    list.insertAtEnd('First');
    list.insertAtEnd('Second');
    list.insertAtEnd('Third');
    list.reversePrint();
  });

  test('Reverse prints', () => {
    const list = new LinkedList<string>();
    list.insertAtBeginning('Third');
    list.insertAtBeginning('Second');
    list.insertAtBeginning('First');
    list.reversePrint();
  });

  test('Reverse prints', () => {
    const list = new LinkedList<string>();
    list.insertAtBeginning('Second');
    list.insertAtEnd('Third');
    list.insertAtBeginning('First');
    list.insertAtEnd('Fourth');
    list.reversePrint();
  });
});
