//================================================================

/**
 * @packageDocumentation
 * @module std.ranges
 */
//================================================================
import * as base from "../../algorithm/heap";
import { less } from "../../functional/comparators";
import { Comparator } from "../../internal/functional/Comparator";
import { begin, end } from "../../iterator/factory";
import { IRandomAccessContainer } from "../container/IRandomAccessContainer";

/* ---------------------------------------------------------
    PUSH & POP
--------------------------------------------------------- */
/**
 * Make a heap.
 *
 * @param range An iterable ranged container.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 */
export function make_heap<
  Range extends Array<any> | IRandomAccessContainer<any>,
>(
  range: Range,
  comp: Comparator<IRandomAccessContainer.ValueType<Range>> = less,
): void {
  return base.make_heap(begin(range), end(range), comp);
}

/**
 * Push an element into heap.
 *
 * @param range An iterable ranged container.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 */
export function push_heap<
  Range extends Array<any> | IRandomAccessContainer<any>,
>(
  range: Range,
  comp: Comparator<IRandomAccessContainer.ValueType<Range>> = less,
): void {
  return base.push_heap(begin(range), end(range), comp);
}

/**
 * Pop an element from heap.
 *
 * @param range An iterable ranged container.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 */
export function pop_heap<
  Range extends Array<any> | IRandomAccessContainer<any>,
>(
  range: Range,
  comp: Comparator<IRandomAccessContainer.ValueType<Range>> = less,
): void {
  return base.pop_heap(begin(range), end(range), comp);
}

/* ---------------------------------------------------------
    SORT
--------------------------------------------------------- */
/**
 * Test whether a range is heap.
 *
 * @param range An iterable ranged container.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 *
 * @return Whether the range is heap.
 */
export function is_heap<Range extends Array<any> | IRandomAccessContainer<any>>(
  range: Range,
  comp: Comparator<IRandomAccessContainer.ValueType<Range>> = less,
): boolean {
  return base.is_heap(begin(range), end(range), comp);
}

/**
 * Find the first element not in heap order.
 *
 * @param range An iterable ranged container.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 *
 * @return Iterator to the first element not in heap order.
 */
export function is_heap_until<
  Range extends Array<any> | IRandomAccessContainer<any>,
>(
  range: Range,
  comp: Comparator<IRandomAccessContainer.ValueType<Range>> = less,
): IRandomAccessContainer.IteratorType<Range> {
  return base.is_heap_until(<any>begin(range), <any>end(range), <any>comp);
}

/**
 * Sort elements of a heap.
 *
 * @param range An iterable ranged container.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 */
export function sort_heap<
  Range extends Array<any> | IRandomAccessContainer<any>,
>(
  range: Range,
  comp: Comparator<IRandomAccessContainer.ValueType<Range>> = less,
): void {
  return base.sort_heap(begin(range), end(range), comp);
}
