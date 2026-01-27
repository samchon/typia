//================================================================

/**
 * @packageDocumentation
 * @module std
 */
//================================================================
import { IPointer } from "../functional/IPointer";
import { equal_to, less } from "../functional/comparators";
import { Comparator } from "../internal/functional/Comparator";
import { General } from "../internal/functional/General";
import { Temporary } from "../internal/functional/Temporary";
import { IBidirectionalIterator } from "../iterator/IBidirectionalIterator";
import { IForwardIterator } from "../iterator/IForwardIterator";
import { advance, distance } from "../iterator/global";
import { Pair } from "../utility/Pair";
import { count_if, find_if, mismatch } from "./iterations";
import { iter_swap, reverse } from "./modifiers";

/* =========================================================
    MATHMATICS
        - MIN & MAX
        - PERMUTATION
============================================================
    MIN & MAX
--------------------------------------------------------- */
/**
 * Get the minium value.
 *
 * @param items Items to search through.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 *
 * @return The minimum value.
 */
export function min<T>(items: T[], comp: Comparator<T> = less): T {
  let minimum: T = items[0];

  for (let i: number = 1; i < items.length; ++i)
    if (comp(items[i], minimum)) minimum = items[i];

  return minimum;
}

/**
 * Get the maximum value.
 *
 * @param items Items to search through.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 *
 * @return The maximum value.
 */
export function max<T>(items: T[], comp: Comparator<T> = less): T {
  let maximum: T = items[0];

  for (let i: number = 1; i < items.length; ++i)
    if (comp(maximum, items[i])) maximum = items[i];

  return maximum;
}

/**
 * Get the minimum & maximum values.
 *
 * @param items Items to search through.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 *
 * @return A {@link Pair} of minimum & maximum values.
 */
export function minmax<T>(items: T[], comp: Comparator<T> = less): Pair<T, T> {
  let minimum: T = items[0];
  let maximum: T = items[0];

  for (let i: number = 1; i < items.length; ++i) {
    if (comp(items[i], minimum)) minimum = items[i];
    if (comp(maximum, items[i])) maximum = items[i];
  }
  return new Pair(minimum, maximum);
}

/**
 * Get the minimum element in range.
 *
 * @param first Forward iterator of the first position.
 * @param last Forward iterator of the last position.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 *
 * @return Iterator to the minimum element.
 */
export function min_element<
  ForwardIterator extends Readonly<
    IForwardIterator<IPointer.ValueType<ForwardIterator>, ForwardIterator>
  >,
>(
  first: ForwardIterator,
  last: ForwardIterator,
  comp: Comparator<IPointer.ValueType<ForwardIterator>> = less,
): ForwardIterator {
  let smallest: ForwardIterator = first;
  first = first.next();

  for (; !first.equals(last); first = first.next())
    if (comp(first.value, smallest.value)) smallest = first;

  return smallest;
}

/**
 * Get the maximum element in range.
 *
 * @param first Forward iterator of the first position.
 * @param last Forward iterator of the last position.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 *
 * @return Iterator to the maximum element.
 */
export function max_element<
  ForwardIterator extends Readonly<
    IForwardIterator<IPointer.ValueType<ForwardIterator>, ForwardIterator>
  >,
>(
  first: ForwardIterator,
  last: ForwardIterator,
  comp: Comparator<IPointer.ValueType<ForwardIterator>> = less,
): ForwardIterator {
  let largest: ForwardIterator = first;
  first = first.next();

  for (; !first.equals(last); first = first.next())
    if (comp(largest.value, first.value)) largest = first;

  return largest;
}

/**
 * Get the minimum & maximum elements in range.
 *
 * @param first Forward iterator of the first position.
 * @param last Forward iterator of the last position.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 *
 * @return A {@link Pair} of iterators to the minimum & maximum elements.
 */
export function minmax_element<
  ForwardIterator extends Readonly<
    IForwardIterator<IPointer.ValueType<ForwardIterator>, ForwardIterator>
  >,
>(
  first: ForwardIterator,
  last: ForwardIterator,
  comp: Comparator<IPointer.ValueType<ForwardIterator>> = less,
): Pair<ForwardIterator, ForwardIterator> {
  let smallest: ForwardIterator = first;
  let largest: ForwardIterator = first;

  first = first.next();
  for (; !first.equals(last); first = first.next()) {
    if (comp(first.value, smallest.value))
      // first is less than the smallest.
      smallest = first;
    if (comp(largest.value, first.value))
      // first is not less than the largest.
      largest = first;
  }
  return new Pair(smallest, largest);
}

/**
 * Get the clamp value.
 *
 * @param v The value to clamp.
 * @param lo Lower value than *hi*.
 * @param hi Higher value than *lo*.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 *
 * @return The clamp value.
 */
export function clamp<T>(v: T, lo: T, hi: T, comp: Comparator<T> = less): T {
  return comp(v, lo) ? lo : comp(hi, v) ? hi : v;
}

/* ---------------------------------------------------------
    PERMUATATIONS
--------------------------------------------------------- */
/**
 * Test whether two ranges are in permutation relationship.
 *
 * @param first1 Forward iteartor of the first position of the 1st range.
 * @param last1 Forward iterator of the last position of the 1st range.
 * @param first2 Forward iterator of the first position of the 2nd range.
 * @param pred A binary function predicates two arguments are equal. Default is {@link equal_to}.
 *
 * @return Whether permutation or not.
 */
export function is_permutation<
  ForwardIterator1 extends Readonly<
    IForwardIterator<IPointer.ValueType<ForwardIterator1>, ForwardIterator1>
  >,
  ForwardIterator2 extends Readonly<
    IForwardIterator<IPointer.ValueType<ForwardIterator1>, ForwardIterator2>
  >,
>(
  first1: ForwardIterator1,
  last1: ForwardIterator1,
  first2: ForwardIterator2,
  pred: Comparator<IPointer.ValueType<ForwardIterator1>> = equal_to,
): boolean {
  // find the mismatched
  const pair: Pair<ForwardIterator1, ForwardIterator2> = <Temporary>(
    mismatch(first1, last1, <Temporary>first2, pred)
  );
  first1 = pair.first;
  first2 = pair.second;

  if (first1.equals(last1)) return true;

  const last2: ForwardIterator2 = advance(
    <Temporary>first2,
    distance(first1, last1),
  ) as ForwardIterator2;

  for (let it = first1; !it.equals(last1); it = it.next()) {
    const lambda = (val: IPointer.ValueType<ForwardIterator1>) =>
      pred(val, it.value);

    if (find_if(first1, it, lambda).equals(it)) {
      const n: number = count_if(<Temporary>first2, <Temporary>last2, lambda);
      if (n === 0 || count_if(it, last1, lambda) !== n) return false;
    }
  }
  return true;
}

/**
 * Transform to the previous permutation.
 *
 * @param first Bidirectional iterator of the first position.
 * @param last Bidirectional iterator of the last position.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 *
 * @return Whether the transformation was meaningful.
 */
export function prev_permutation<
  BidirectionalIterator extends General<
    IBidirectionalIterator<
      IPointer.ValueType<BidirectionalIterator>,
      BidirectionalIterator
    >
  >,
>(
  first: BidirectionalIterator,
  last: BidirectionalIterator,
  comp: Comparator<IPointer.ValueType<BidirectionalIterator>> = less,
): boolean {
  if (first.equals(last) === true) return false;

  let previous: BidirectionalIterator = last.prev();
  if (first.equals(previous) === true) return false;

  while (true) {
    let x: BidirectionalIterator = previous;
    previous = previous.prev();

    if (comp(x.value, previous.value) === true) {
      let y: BidirectionalIterator = last.prev();
      while (comp(y.value, previous.value) === false) y = y.prev();

      iter_swap(previous, y);
      reverse(x, last);
      return true;
    }

    if (previous.equals(first) === true) {
      reverse(first, last);
      return false;
    }
  }
}

/**
 * Transform to the next permutation.
 *
 * @param first Bidirectional iterator of the first position.
 * @param last Bidirectional iterator of the last position.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 *
 * @return Whether the transformation was meaningful.
 */
export function next_permutation<
  BidirectionalIterator extends General<
    IBidirectionalIterator<
      IPointer.ValueType<BidirectionalIterator>,
      BidirectionalIterator
    >
  >,
>(
  first: BidirectionalIterator,
  last: BidirectionalIterator,
  comp: Comparator<IPointer.ValueType<BidirectionalIterator>> = less,
): boolean {
  if (first.equals(last) === true) return false;

  let previous: BidirectionalIterator = last.prev();
  if (first.equals(previous) === true) return false;

  while (true) {
    const x: BidirectionalIterator = previous;
    previous = previous.prev();

    if (comp(previous.value, x.value) === true) {
      let y: BidirectionalIterator = last.prev();
      while (comp(previous.value, y.value) === false) y = y.prev();

      iter_swap(previous, y);
      reverse(x, last);
      return true;
    }

    if (previous.equals(first) === true) {
      reverse(first, last);
      return false;
    }
  }
}
