//================================================================

/**
 * @packageDocumentation
 * @module std.ranges
 */
//================================================================
import * as base from "../../algorithm/merge";
import { less } from "../../functional/comparators";
import { Comparator } from "../../internal/functional/Comparator";
import { Temporary } from "../../internal/functional/Temporary";
import { Writeonly } from "../../internal/functional/Writeonly";
import { IForwardIterator } from "../../iterator/IForwardIterator";
import { begin, end } from "../../iterator/factory";
import { size } from "../../iterator/global";
import { IBidirectionalContainer } from "../container/IBidirectionalContainer";
import { IForwardContainer } from "../container/IForwardContainer";

/* ---------------------------------------------------------
    MERGE
--------------------------------------------------------- */
/**
 * Merge two sorted ranges.
 *
 * @param range1 The 1st iterable ranged container.
 * @param range2 The 2nd iterable ranged container.
 * @param output Output iterator of the first position.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 *
 * @return Output Iterator of the last position by advancing.
 */
export function merge<
  Range1 extends Array<any> | IForwardContainer<any>,
  Range2 extends IForwardContainer.SimilarType<Range1>,
  OutputIterator extends Writeonly<
    IForwardIterator<IForwardContainer.ValueType<Range1>, OutputIterator>
  >,
>(
  range1: Range1,
  range2: Range2,
  output: OutputIterator,
  comp: Comparator<IForwardContainer.ValueType<Range1>> = less,
): OutputIterator {
  return base.merge(
    begin(range1),
    end(range1),
    <Temporary>begin(range2),
    end(range2),
    output,
    comp,
  );
}

/**
 * Merge two sorted & consecutive ranges.
 *
 * @param range An iterable ranged container.
 * @param middle Bidirectional iterator of the initial position of the 2nd range.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 */
export function inplace_merge<
  Range extends Array<any> | IBidirectionalContainer<any, any>,
>(
  range: Range,
  middle: IBidirectionalContainer.IteratorType<Range>,
  comp: Comparator<IForwardContainer.ValueType<Range>> = less,
): void {
  return base.inplace_merge(begin(range), <any>middle, end(range), comp);
}

/* ---------------------------------------------------------
    SET OPERATIONS
--------------------------------------------------------- */
/**
 * Test whether two sorted ranges are in inclusion relationship.
 *
 * @param range1 The 1st iterable ranged container.
 * @param range2 The 2nd iterable ranged container.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 *
 * @return Whether [first, last1) includes [first2, last2).
 */
export function includes<
  Range1 extends Array<any> | IForwardContainer<any>,
  Range2 extends IForwardContainer.SimilarType<Range1>,
>(
  range1: Range1,
  range2: Range2,
  comp: Comparator<IForwardContainer.ValueType<Range1>> = less,
): boolean {
  if (size(range1) < size(range2)) return false;
  else
    return base.includes(
      begin(range1),
      end(range1),
      <Temporary>begin(range2),
      end(range2),
      comp,
    );
}

/**
 * Combine two sorted ranges to union relationship.
 *
 * @param range1 The 1st iterable ranged container.
 * @param range2 The 2nd iterable ranged container.
 * @param output Output iterator of the first position.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 *
 * @return Output Iterator of the last position by advancing.
 */
export function set_union<
  Range1 extends Array<any> | IForwardContainer<any>,
  Range2 extends IForwardContainer.SimilarType<Range1>,
  OutputIterator extends Writeonly<
    IForwardIterator<IForwardContainer.ValueType<Range1>, OutputIterator>
  >,
>(
  range1: Range1,
  range2: Range2,
  output: OutputIterator,
  comp: Comparator<IForwardContainer.ValueType<Range1>> = less,
): OutputIterator {
  return base.set_union(
    begin(range1),
    end(range1),
    <Temporary>begin(range2),
    end(range2),
    output,
    comp,
  );
}

/**
 * Combine two sorted ranges to intersection relationship.
 *
 * @param range1 The 1st iterable ranged container.
 * @param range2 The 2nd iterable ranged container.
 * @param output Output iterator of the first position.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 *
 * @return Output Iterator of the last position by advancing.
 */
export function set_intersection<
  Range1 extends Array<any> | IForwardContainer<any>,
  Range2 extends IForwardContainer.SimilarType<Range1>,
  OutputIterator extends Writeonly<
    IForwardIterator<IForwardContainer.ValueType<Range1>, OutputIterator>
  >,
>(
  range1: Range1,
  range2: Range2,
  output: OutputIterator,
  comp: Comparator<IForwardContainer.ValueType<Range1>> = less,
): OutputIterator {
  return base.set_intersection(
    begin(range1),
    end(range1),
    <Temporary>begin(range2),
    end(range2),
    output,
    comp,
  );
}

/**
 * Combine two sorted ranges to difference relationship.
 *
 * @param range1 The 1st iterable ranged container.
 * @param range2 The 2nd iterable ranged container.
 * @param output Output iterator of the first position.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 *
 * @return Output Iterator of the last position by advancing.
 */
export function set_difference<
  Range1 extends Array<any> | IForwardContainer<any>,
  Range2 extends IForwardContainer.SimilarType<Range1>,
  OutputIterator extends Writeonly<
    IForwardIterator<IForwardContainer.ValueType<Range1>, OutputIterator>
  >,
>(
  range1: Range1,
  range2: Range2,
  output: OutputIterator,
  comp: Comparator<IForwardContainer.ValueType<Range1>> = less,
): OutputIterator {
  return base.set_difference(
    begin(range1),
    end(range1),
    <Temporary>begin(range2),
    end(range2),
    output,
    comp,
  );
}

/**
 * Combine two sorted ranges to symmetric difference relationship.
 *
 * @param range1 The 1st iterable ranged container.
 * @param range2 The 2nd iterable ranged container.
 * @param output Output iterator of the first position.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 *
 * @return Output Iterator of the last position by advancing.
 */
export function set_symmetric_difference<
  Range1 extends Array<any> | IForwardContainer<any>,
  Range2 extends IForwardContainer.SimilarType<Range1>,
  OutputIterator extends Writeonly<
    IForwardIterator<IForwardContainer.ValueType<Range1>, OutputIterator>
  >,
>(
  range1: Range1,
  range2: Range2,
  output: OutputIterator,
  comp: Comparator<IForwardContainer.ValueType<Range1>> = less,
): OutputIterator {
  return base.set_symmetric_difference(
    begin(range1),
    end(range1),
    <Temporary>begin(range2),
    end(range2),
    output,
    comp,
  );
}
