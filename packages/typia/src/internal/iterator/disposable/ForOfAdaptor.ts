//================================================================

/**
 * @packageDocumentation
 * @module std.internal
 */
//================================================================
import { IForwardIterator } from "../../../iterator/IForwardIterator";

/**
 * Adaptor for `for ... of` iteration.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export class ForOfAdaptor<
  T,
  InputIterator extends Readonly<IForwardIterator<T, InputIterator>>,
> implements IterableIterator<T>
{
  private it_: InputIterator;
  private last_: InputIterator;

  /**
   * Initializer Constructor.
   *
   * @param first Input iteartor of the first position.
   * @param last Input iterator of the last position.
   */
  public constructor(first: InputIterator, last: InputIterator) {
    this.it_ = first;
    this.last_ = last;
  }

  /**
   * @inheritDoc
   */
  public next(): IteratorResult<T> {
    if (this.it_.equals(this.last_))
      return {
        done: true,
        value: undefined!,
      };
    else {
      const it: InputIterator = this.it_;
      this.it_ = this.it_.next();

      return {
        done: false,
        value: it.value,
      };
    }
  }

  /**
   * @inheritDoc
   */
  public [Symbol.iterator](): IterableIterator<T> {
    return this;
  }
}
