//================================================================

/**
 * @packageDocumentation
 * @module std.ranges
 */
//================================================================
import * as base from "../../algorithm/binary_search";
import { less } from "../../functional/comparators";
import { Comparator } from "../../internal/functional/Comparator";
import { begin, end } from "../../iterator/factory";
import { Pair } from "../../utility/Pair";
import { IForwardContainer } from "../container/IForwardContainer";

/* =========================================================
    BINARY SEARCH
========================================================= */
/**
 * Get iterator to lower bound.
 *
 * @param range An iterable ranged container.
 * @param val Value to search for.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 *
 * @return Iterator to the first element equal or after the val.
 */
export function lower_bound<Range extends Array<any> | IForwardContainer<any>>(
  range: Range,
  val: IForwardContainer.ValueType<Range>,
  comp: Comparator<IForwardContainer.ValueType<Range>> = less,
): IForwardContainer.IteratorType<Range> {
  return base.lower_bound(begin(range), end(range), val, comp);
}

/**
 * Get iterator to upper bound.
 *
 * @param range An iterable ranged container.
 * @param val Value to search for.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 *
 * @return Iterator to the first element after the key.
 */
export function upper_bound<Range extends Array<any> | IForwardContainer<any>>(
  range: Range,
  val: IForwardContainer.ValueType<Range>,
  comp: Comparator<IForwardContainer.ValueType<Range>> = less,
): IForwardContainer.IteratorType<Range> {
  return base.upper_bound(begin(range), end(range), val, comp);
}

/**
 * Get range of equal elements.
 *
 * @param range An iterable ranged container.
 * @param val Value to search for.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 *
 * @return Pair of {@link lower_bound} and {@link upper_bound}.
 */
export function equal_range<Range extends Array<any> | IForwardContainer<any>>(
  range: Range,
  val: IForwardContainer.ValueType<Range>,
  comp: Comparator<IForwardContainer.ValueType<Range>> = less,
): Pair<
  IForwardContainer.IteratorType<Range>,
  IForwardContainer.IteratorType<Range>
> {
  return base.equal_range(begin(range), end(range), val, comp);
}

/**
 * Test whether a value exists in sorted range.
 *
 * @param range An iterable ranged container.
 * @param val Value to search for.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 *
 * @return Whether the value exists or not.
 */
export function binary_search<
  Range extends Array<any> | IForwardContainer<any>,
>(
  range: Range,
  val: IForwardContainer.ValueType<Range>,
  comp: Comparator<IForwardContainer.ValueType<Range>> = less,
): boolean {
  return base.binary_search(begin(range), end(range), val, comp);
}
