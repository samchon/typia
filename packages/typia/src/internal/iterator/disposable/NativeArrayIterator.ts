//================================================================

/**
 * @packageDocumentation
 * @module std.internal
 */
//================================================================
import { IForwardIterator } from "../../../iterator/IForwardIterator";

export class NativeArrayIterator<T>
  implements Readonly<IForwardIterator<T, NativeArrayIterator<T>>>
{
  private data_: Array<T>;
  private index_: number;

  /* ---------------------------------------------------------
        CONSTRUCTORS
    --------------------------------------------------------- */
  public constructor(data: Array<T>, index: number) {
    this.data_ = data;
    this.index_ = index;
  }

  /* ---------------------------------------------------------
        ACCESSORS
    --------------------------------------------------------- */
  public index(): number {
    return this.index_;
  }

  public get value(): T {
    return this.data_[this.index_];
  }

  /* ---------------------------------------------------------
        MOVERS
    --------------------------------------------------------- */
  public prev(): NativeArrayIterator<T> {
    --this.index_;
    return this;
  }

  public next(): NativeArrayIterator<T> {
    ++this.index_;
    return this;
  }

  public advance(n: number): NativeArrayIterator<T> {
    this.index_ += n;
    return this;
  }

  /* ---------------------------------------------------------
        COMPARES
    --------------------------------------------------------- */
  public equals(obj: NativeArrayIterator<T>): boolean {
    return this.data_ === obj.data_ && this.index_ === obj.index_;
  }

  public swap(obj: NativeArrayIterator<T>): void {
    [this.data_, obj.data_] = [obj.data_, this.data_];
    [this.index_, obj.index_] = [obj.index_, this.index_];
  }
}
