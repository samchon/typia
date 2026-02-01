//================================================================

/**
 * @packageDocumentation
 * @module std
 */
//================================================================
import { InvalidArgument } from "../exception/InvalidArgument";
import { IPointer } from "../functional/IPointer";
import { IEmpty } from "../internal/container/partial/IEmpty";
import { ISize } from "../internal/container/partial/ISize";
import { IBidirectionalIterator } from "./IBidirectionalIterator";
import { IForwardIterator } from "./IForwardIterator";
import { IRandomAccessIterator } from "./IRandomAccessIterator";

/* =========================================================
    GLOBAL FUNCTIONS
        - ACCESSORS
        - MOVERS
        - FACTORIES
============================================================
    ACCESSORS
--------------------------------------------------------- */
/**
 * Test whether a container is empty.
 *
 * @param source Target container.
 * @return Whether empty or not.
 */
export function empty(source: Array<any> | IEmpty): boolean {
  if (source instanceof Array) return source.length !== 0;
  else return source.empty();
}

/**
 * Get number of elements of a container.
 *
 * @param source Target container.
 * @return The number of elements in the container.
 */
export function size(source: Array<any> | ISize): number {
  if (source instanceof Array) return source.length;
  else return source.size();
}

/**
 * Get distance between two iterators.
 *
 * @param first Input iteartor of the first position.
 * @param last Input iterator of the last position.
 *
 * @return The distance.
 */
export function distance<
  InputIterator extends Readonly<
    IForwardIterator<IPointer.ValueType<InputIterator>, InputIterator>
  >,
>(first: InputIterator, last: InputIterator): number;

export function distance<
  InputIterator extends Readonly<
    IRandomAccessIterator<IPointer.ValueType<InputIterator>, InputIterator>
  >,
>(first: InputIterator, last: InputIterator): number {
  if (first.index instanceof Function) return _Distance_via_index(first, last);

  let ret: number = 0;
  for (; !first.equals(last); first = first.next()) ++ret;

  return ret;
}

function _Distance_via_index<
  RandomAccessIterator extends IRandomAccessIterator<
    IPointer.ValueType<RandomAccessIterator>,
    RandomAccessIterator
  >,
>(first: RandomAccessIterator, last: RandomAccessIterator): number {
  const x: number = first.index();
  const y: number = last.index();

  if ((first as any).base instanceof Function) return x - y;
  else return y - x;
}

/* ---------------------------------------------------------
    ACCESSORS
--------------------------------------------------------- */
/**
 * Advance iterator.
 *
 * @param it Target iterator to advance.
 * @param n Step to advance.
 *
 * @return The advanced iterator.
 */
export function advance<
  InputIterator extends IForwardIterator<
    IPointer.ValueType<InputIterator>,
    InputIterator
  >,
>(it: InputIterator, n: number): InputIterator;

export function advance<
  InputIterator extends IRandomAccessIterator<
    IPointer.ValueType<InputIterator>,
    InputIterator
  >,
>(it: InputIterator, n: number): InputIterator {
  if (n === 0) return it;
  else if (it.advance instanceof Function) return it.advance(n);

  let stepper: (it: InputIterator) => InputIterator;
  if (n < 0) {
    if (!(it.prev instanceof Function))
      throw new InvalidArgument(
        "Error on std.advance(): parametric iterator is not a bi-directional iterator, thus advancing to negative direction is not possible.",
      );

    stepper = (it) => it.prev();
    n = -n;
  } else stepper = (it) => it.next();

  while (n-- > 0) it = stepper(it);
  return it;
}

/**
 * Get previous iterator.
 *
 * @param it Iterator to move.
 * @param n Step to move prev.
 * @return An iterator moved to prev *n* steps.
 */
export function prev<
  BidirectionalIterator extends IBidirectionalIterator<
    IPointer.ValueType<BidirectionalIterator>,
    BidirectionalIterator
  >,
>(it: BidirectionalIterator, n: number = 1): BidirectionalIterator {
  if (n === 1) return it.prev();
  else return advance(it, -n);
}

/**
 * Get next iterator.
 *
 * @param it Iterator to move.
 * @param n Step to move next.
 * @return Iterator moved to next *n* steps.
 */
export function next<
  ForwardIterator extends IForwardIterator<
    IPointer.ValueType<ForwardIterator>,
    ForwardIterator
  >,
>(it: ForwardIterator, n: number = 1): ForwardIterator {
  if (n === 1) return it.next();
  else return advance(it, n);
}
