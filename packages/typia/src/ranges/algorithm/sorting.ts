//================================================================

/**
 * @packageDocumentation
 * @module std.ranges
 */
//================================================================
import * as base from "../../algorithm/sorting";
import { less } from "../../functional/comparators";
import { Comparator } from "../../internal/functional/Comparator";
import { begin, end } from "../../iterator/factory";
import { IForwardContainer } from "../container/IForwardContainer";
import { IRandomAccessContainer } from "../container/IRandomAccessContainer";

/* ---------------------------------------------------------
    SORT
--------------------------------------------------------- */
/**
 * Sort elements in range.
 *
 * @param range An iterable ranged container.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 */
export function sort<Range extends Array<any> | IRandomAccessContainer<any>>(
  range: Range,
  comp: Comparator<IForwardContainer.ValueType<Range>> = less,
): void {
  return base.sort(begin(range), end(range), comp);
}

/**
 * Sort elements in range stably.
 *
 * @param range An iterable ranged container.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 */
export function stable_sort<
  Range extends Array<any> | IRandomAccessContainer<any>,
>(
  range: Range,
  comp: Comparator<IForwardContainer.ValueType<Range>> = less,
): void {
  return base.stable_sort(begin(range), end(range), comp);
}

/**
 * Sort elements in range partially.
 *
 * @param range An iterable ranged container.
 * @param middle Random access iterator of the middle position between [first, last). Elements only in [first, middle) are fully sorted.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 */
export function partial_sort<
  Range extends Array<any> | IRandomAccessContainer<any>,
>(
  range: Range,
  middle: IRandomAccessContainer.IteratorType<Range>,
  comp: Comparator<IForwardContainer.ValueType<Range>> = less,
): void {
  return base.partial_sort(begin(range), <any>middle, end(range), comp);
}

/**
 * Copy elements in range with partial sort.
 *
 * @param range An iterable ranged container of input.
 * @param output An iterable ranged container of output.
 *
 * @return Output Iterator of the last position by advancing.
 */
export function partial_sort_copy<
  Range extends Array<any> | IForwardContainer<any>,
  Output extends Array<any> | IForwardContainer<any>,
>(
  range: Range,
  output: Output,
  comp: Comparator<IForwardContainer.ValueType<Range>> = less,
): IForwardContainer.IteratorType<Output> {
  return base.partial_sort_copy(
    begin(range),
    end(range),
    begin(output),
    end(output),
    comp,
  );
}

/**
 * Rearrange for the n'th element.
 *
 * @param range An iterable ranged container.
 * @param nth Random access iterator the n'th position.
 * @param last Random access iterator of the last position.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 */
export function nth_element<
  Range extends Array<any> | IRandomAccessContainer<any>,
>(
  range: Range,
  nth: IRandomAccessContainer.IteratorType<Range>,
  comp: Comparator<IForwardContainer.ValueType<Range>> = less,
): void {
  return base.nth_element(begin(range), <any>nth, end(range), comp);
}

/* ---------------------------------------------------------
    INSPECTOR
--------------------------------------------------------- */
/**
 * Test whether a range is sorted.
 *
 * @param range An iterable ranged container.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 *
 * @return Whether sorted or not.
 */
export function is_sorted<Range extends Array<any> | IForwardContainer<any>>(
  range: Range,
  comp: Comparator<IForwardContainer.ValueType<Range>> = less,
): boolean {
  return base.is_sorted(begin(range), end(range), comp);
}

/**
 * Find the first unsorted element in range.
 *
 * @param range An iterable ranged container.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 *
 * @return Iterator to the first element who violates the order.
 */
export function is_sorted_until<
  Range extends Array<any> | IForwardContainer<any>,
>(
  range: Range,
  comp: Comparator<IForwardContainer.ValueType<Range>> = less,
): IForwardContainer.IteratorType<Range> {
  return base.is_sorted_until(begin(range), end(range), comp);
}
