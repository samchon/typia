//================================================================

/**
 * @packageDocumentation
 * @module std.internal
 */
//================================================================
import { IForwardIterator } from "../../../iterator/IForwardIterator";

export class Repeater<T> implements Readonly<IForwardIterator<T, Repeater<T>>> {
  private index_: number;
  private value_: T | undefined;

  /* ---------------------------------------------------------
        CONSTRUCTORS
    --------------------------------------------------------- */
  public constructor(index: number, value?: T) {
    this.index_ = index;
    this.value_ = value;
  }

  /* ---------------------------------------------------------
        ACCESSORS
    --------------------------------------------------------- */
  public index(): number {
    return this.index_;
  }

  public get value(): T {
    return this.value_!;
  }

  /* ---------------------------------------------------------
        MOVERS & COMPARE
    --------------------------------------------------------- */
  public next(): Repeater<T> {
    ++this.index_;
    return this;
  }

  public equals(obj: Repeater<T>): boolean {
    return this.index_ === obj.index_;
  }
}
