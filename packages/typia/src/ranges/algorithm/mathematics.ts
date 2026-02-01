//================================================================

/**
 * @packageDocumentation
 * @module std.ranges
 */
//================================================================
import * as base from "../../algorithm/mathematics";
import { equal_to, less } from "../../functional/comparators";
import { Comparator } from "../../internal/functional/Comparator";
import { Temporary } from "../../internal/functional/Temporary";
import { begin, end } from "../../iterator/factory";
import { size } from "../../iterator/global";
import { Pair } from "../../utility/Pair";
import { IBidirectionalContainer } from "../container/IBidirectionalContainer";
import { IForwardContainer } from "../container/IForwardContainer";

/* ---------------------------------------------------------
    MIN & MAX
--------------------------------------------------------- */
/**
 * Get the minimum element in range.
 *
 * @param range An iterable ranged container.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 *
 * @return Iterator to the minimum element.
 */
export function min_element<Range extends Array<any> | IForwardContainer<any>>(
  range: Range,
  comp: Comparator<IForwardContainer.ValueType<Range>> = less,
): IForwardContainer.IteratorType<Range> {
  return base.min_element(begin(range), end(range), comp);
}

/**
 * Get the maximum element in range.
 *
 * @param range An iterable ranged container.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 *
 * @return Iterator to the maximum element.
 */
export function max_element<Range extends Array<any> | IForwardContainer<any>>(
  range: Range,
  comp: Comparator<IForwardContainer.ValueType<Range>> = less,
): IForwardContainer.IteratorType<Range> {
  return base.max_element(begin(range), end(range), comp);
}

/**
 * Get the minimum & maximum elements in range.
 *
 * @param range An iterable ranged container.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 *
 * @return A {@link Pair} of iterators to the minimum & maximum elements.
 */
export function minmax_element<
  Range extends Array<any> | IForwardContainer<any>,
>(
  range: Range,
  comp: Comparator<IForwardContainer.ValueType<Range>> = less,
): Pair<
  IForwardContainer.IteratorType<Range>,
  IForwardContainer.IteratorType<Range>
> {
  return base.minmax_element(begin(range), end(range), comp);
}

/* ---------------------------------------------------------
    PERMUATATIONS
--------------------------------------------------------- */
/**
 * Test whether two ranges are in permutation relationship.
 *
 * @param range1 The 1st iterable ranged container.
 * @param range2 The 2nd iterable ranged container.
 * @param pred A binary function predicates two arguments are equal. Default is {@link equal_to}.
 *
 * @return Whether permutation or not.
 */
export function is_permutation<
  Range1 extends Array<any> | IForwardContainer<any>,
  Range2 extends IForwardContainer.SimilarType<Range1>,
>(
  range1: Range1,
  range2: Range2,
  pred: Comparator<IForwardContainer.ValueType<Range1>> = <any>equal_to,
): boolean {
  if (size(range1) !== size(range2)) return false;
  else
    return base.is_permutation(
      begin(range1),
      end(range1),
      <Temporary>begin(range2),
      pred,
    );
}

/**
 * Transform to the previous permutation.
 *
 * @param range An iterable ranged container.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 *
 * @return Whether the transformation was meaningful.
 */
export function prev_permutation<
  Range extends Array<any> | IBidirectionalContainer<any, any>,
>(
  range: Range,
  comp: Comparator<IForwardContainer.ValueType<Range>> = less,
): boolean {
  return base.prev_permutation(begin(range), end(range), comp);
}

/**
 * Transform to the next permutation.
 *
 * @param range An iterable ranged container.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 *
 * @return Whether the transformation was meaningful.
 */
export function next_permutation<
  Range extends Array<any> | IBidirectionalContainer<any, any>,
>(
  range: Range,
  comp: Comparator<IForwardContainer.ValueType<Range>> = less,
): boolean {
  return base.next_permutation(begin(range), end(range), comp);
}
