/* eslint-disable no-unused-vars */
export interface Product {
  getBasePrice(): number,
  getTotalPrice(): number,
  getTax(): number,
  getName(): string,
  getId(): string
}

export interface Collection <T> {
  add(element: T): void,
  remove(id: string): void,
  empty(): void,
  size(): number,
  getList(): T[]
}

