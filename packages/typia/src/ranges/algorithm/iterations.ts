//================================================================

/**
 * @packageDocumentation
 * @module std.ranges
 */
//================================================================
import * as base from "../../algorithm/iterations";
import { equal_to, less } from "../../functional/comparators";
import { BinaryPredicator } from "../../internal/functional/BinaryPredicator";
import { Comparator } from "../../internal/functional/Comparator";
import { Temporary } from "../../internal/functional/Temporary";
import { UnaryPredicator } from "../../internal/functional/UnaryPredicator";
import { begin, end } from "../../iterator/factory";
import { size } from "../../iterator/global";
import { Pair } from "../../utility/Pair";
import { IForwardContainer } from "../container/IForwardContainer";

type BinaryPredicatorInferrer<
  Range1 extends Array<any> | IForwardContainer<any>,
  Range2 extends Array<any> | IForwardContainer<any>,
> = BinaryPredicator<
  IForwardContainer.ValueType<Range1>,
  IForwardContainer.ValueType<Range2>
>;

/* ---------------------------------------------------------
    FOR_EACH
--------------------------------------------------------- */
/**
 * Apply a function to elements in range.
 *
 * @param range An iterable ranged container.
 * @param fn The function to apply.
 *
 * @return The function *fn* itself.
 */
export function for_each<
  Range extends Array<any> | IForwardContainer<any>,
  Func extends (val: IForwardContainer.ValueType<Range>) => any,
>(range: Range, fn: Func): Func {
  return base.for_each(begin(range), end(range), fn);
}

/**
 * Apply a function to elements in steps.
 *
 * @param range An iterable ranged container.
 * @param n Steps to maximum advance.
 * @param fn The function to apply.
 *
 * @return Iterator advanced from *first* for *n* steps.
 */
export function for_each_n<
  Range extends Array<any> | IForwardContainer<any>,
  Func extends (val: IForwardContainer.ValueType<Range>) => any,
>(range: Range, n: number, fn: Func): IForwardContainer.IteratorType<Range> {
  return base.for_each_n(begin(range), n, fn);
}

/* ---------------------------------------------------------
    AGGREGATE CONDITIONS
--------------------------------------------------------- */
/**
 * Test whether all elements meet a specific condition.
 *
 * @param range An iterable ranged container.
 * @param pred A function predicates the specific condition.
 *
 * @return Whether the *pred* returns always `true` for all elements.
 */
export function all_of<Range extends Array<any> | IForwardContainer<any>>(
  range: Range,
  pred: UnaryPredicator<IForwardContainer.ValueType<Range>>,
): boolean {
  return base.all_of(begin(range), end(range), pred);
}

/**
 * Test whether any element meets a specific condition.
 *
 * @param range An iterable ranged container.
 * @param pred A function predicates the specific condition.
 *
 * @return Whether the *pred* returns at least a `true` for all elements.
 */
export function any_of<Range extends Array<any> | IForwardContainer<any>>(
  range: Range,
  pred: UnaryPredicator<IForwardContainer.ValueType<Range>>,
): boolean {
  return base.any_of(begin(range), end(range), pred);
}

/**
 * Test whether any element doesn't meet a specific condition.
 *
 * @param range An iterable ranged container.
 * @param pred A function predicates the specific condition.
 *
 * @return Whether the *pred* doesn't return `true` for all elements.
 */
export function none_of<Range extends Array<any> | IForwardContainer<any>>(
  range: Range,
  pred: UnaryPredicator<IForwardContainer.ValueType<Range>>,
): boolean {
  return base.none_of(begin(range), end(range), pred);
}

/**
 * Test whether two ranges are equal.
 *
 * @param range1 The 1st iterable ranged container.
 * @param range2 The 2nd iterable ranged container.
 * @param pred A binary function predicates two arguments are equal.
 *
 * @return Whether two ranges are equal.
 */
export function equal<
  Range1 extends Array<any> | IForwardContainer<any>,
  Range2 extends IForwardContainer.SimilarType<Range1>,
>(range1: Range1, range2: Range2): boolean;

/**
 * Test whether two ranges are equal.
 *
 * @param range1 The 1st iterable ranged container.
 * @param range2 The 2nd iterable ranged container.
 * @param pred A binary function predicates two arguments are equal.
 *
 * @return Whether two ranges are equal.
 */
export function equal<
  Range1 extends Array<any> | IForwardContainer<any>,
  Range2 extends Array<any> | IForwardContainer<any>,
>(
  range1: Range1,
  range2: Range2,
  pred: BinaryPredicatorInferrer<Range1, Range2>,
): boolean;

export function equal<
  Range1 extends Array<any> | IForwardContainer<any>,
  Range2 extends Array<any> | IForwardContainer<any>,
>(
  range1: Range1,
  range2: Range2,
  pred: BinaryPredicatorInferrer<Range1, Range2> = <any>equal_to,
): boolean {
  if (size(range1) !== size(range2)) return false;
  else return base.equal(begin(range1), end(range1), begin(range2), pred);
}

/**
 * Compare lexicographically.
 *
 * @param range1 The 1st iterable ranged container.
 * @param range2 The 2nd iterable ranged container.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 *
 * @return Whether the 1st range precedes the 2nd.
 */
export function lexicographical_compare<
  Range1 extends Array<any> | IForwardContainer<any>,
  Range2 extends IForwardContainer.SimilarType<Range1>,
>(
  range1: Range1,
  range2: Range2,
  comp: BinaryPredicatorInferrer<Range1, Range1> = less,
): boolean {
  return base.lexicographical_compare(
    begin(range1),
    end(range1),
    <Temporary>begin(range2),
    end(range2),
    comp,
  );
}

/* ---------------------------------------------------------
    FINDERS
--------------------------------------------------------- */
/**
 * Find a value in range.
 *
 * @param range An iterable ranged container.
 * @param val The value to find.
 *
 * @return Iterator to the first element {@link equal to equal_to} the value.
 */
export function find<Range extends Array<any> | IForwardContainer<any>>(
  range: Range,
  val: IForwardContainer.ValueType<Range>,
): IForwardContainer.IteratorType<Range> {
  return base.find(begin(range), end(range), val);
}

/**
 * Find a matched condition in range.
 *
 * @param range An iterable ranged container.
 * @param pred A function predicates the specific condition.
 *
 * @return Iterator to the first element *pred* returns `true`.
 */
export function find_if<Range extends Array<any> | IForwardContainer<any>>(
  range: Range,
  pred: UnaryPredicator<IForwardContainer.ValueType<Range>>,
): IForwardContainer.IteratorType<Range> {
  return base.find_if(begin(range), end(range), pred);
}

/**
 * Find a mismatched condition in range.
 *
 * @param range An iterable ranged container.
 * @param pred A function predicates the specific condition.
 *
 * @return Iterator to the first element *pred* returns `false`.
 */
export function find_if_not<Range extends Array<any> | IForwardContainer<any>>(
  range: Range,
  pred: UnaryPredicator<IForwardContainer.ValueType<Range>>,
): IForwardContainer.IteratorType<Range> {
  return base.find_if_not(begin(range), end(range), pred);
}

/**
 * Find the last sub range.
 *
 * @param range1 The 1st iterable ranged container.
 * @param range2 The 2nd iterable ranged container.
 *
 * @return Iterator to the first element of the last sub range.
 */
export function find_end<
  Range1 extends Array<any> | IForwardContainer<any>,
  Range2 extends IForwardContainer.SimilarType<Range1>,
>(range1: Range1, range2: Range2): IForwardContainer.IteratorType<Range1>;

/**
 * Find the last sub range.
 *
 * @param range1 The 1st iterable ranged container.
 * @param range2 The 2nd iterable ranged container.
 * @param pred A binary function predicates two arguments are equal.
 *
 * @return Iterator to the first element of the last sub range.
 */
export function find_end<
  Range1 extends Array<any> | IForwardContainer<any>,
  Range2 extends Array<any> | IForwardContainer<any>,
>(
  range1: Range1,
  range2: Range2,
  pred: BinaryPredicatorInferrer<Range1, Range2>,
): IForwardContainer.IteratorType<Range1>;

export function find_end<
  Range1 extends Array<any> | IForwardContainer<any>,
  Range2 extends Array<any> | IForwardContainer<any>,
>(
  range1: Range1,
  range2: Range2,
  pred: BinaryPredicatorInferrer<Range1, Range2> = <any>equal_to,
): IForwardContainer.IteratorType<Range1> {
  return base.find_end(
    begin(range1),
    end(range1),
    begin(range2),
    end(range2),
    pred,
  );
}

/**
 * Find the first sub range.
 *
 * @param range1 The 1st iterable ranged container.
 * @param range2 The 2nd iterable ranged container.
 *
 * @return Iterator to the first element of the first sub range.
 */
export function find_first_of<
  Range1 extends Array<any> | IForwardContainer<any>,
  Range2 extends IForwardContainer.SimilarType<Range1>,
>(range1: Range1, range2: Range2): IForwardContainer.IteratorType<Range1>;

/**
 * Find the first sub range.
 *
 * @param range1 The 1st iterable ranged container.
 * @param range2 The 2nd iterable ranged container.
 * @param pred A binary function predicates two arguments are equal.
 *
 * @return Iterator to the first element of the first sub range.
 */
export function find_first_of<
  Range1 extends Array<any> | IForwardContainer<any>,
  Range2 extends Array<any> | IForwardContainer<any>,
>(
  range1: Range1,
  range2: Range2,
  pred: BinaryPredicatorInferrer<Range1, Range2>,
): IForwardContainer.IteratorType<Range1>;

export function find_first_of<
  Range1 extends Array<any> | IForwardContainer<any>,
  Range2 extends Array<any> | IForwardContainer<any>,
>(
  range1: Range1,
  range2: Range2,
  pred: BinaryPredicatorInferrer<Range1, Range2> = <any>equal_to,
): IForwardContainer.IteratorType<Range1> {
  return base.find_first_of(
    begin(range1),
    end(range1),
    begin(range2),
    end(range2),
    pred,
  );
}

/**
 * Find the first adjacent element.
 *
 * @param range An iterable ranged container.
 * @param pred A binary function predicates two arguments are equal. Default is {@link equal_to}.
 *
 * @return Iterator to the first element of adjacent find.
 */
export function adjacent_find<
  Range extends Array<any> | IForwardContainer<any>,
>(
  range: Range,
  pred: Comparator<IForwardContainer.ValueType<Range>> = equal_to,
): IForwardContainer.IteratorType<Range> {
  return base.adjacent_find(begin(range), end(range), pred);
}

/**
 * Search sub range.
 *
 * @param range1 The 1st iterable ranged container.
 * @param range2 The 2nd iterable ranged container.
 *
 * @return Iterator to the first element of the sub range.
 */
export function search<
  Range1 extends Array<any> | IForwardContainer<any>,
  Range2 extends Array<any> | IForwardContainer.SimilarType<Range1>,
>(range1: Range1, range2: Range2): IForwardContainer.IteratorType<Range1>;

/**
 * Search sub range.
 *
 * @param range1 The 1st iterable ranged container.
 * @param range2 The 2nd iterable ranged container.
 * @param pred A binary function predicates two arguments are equal.
 *
 * @return Iterator to the first element of the sub range.
 */
export function search<
  Range1 extends Array<any> | IForwardContainer<any>,
  Range2 extends Array<any> | IForwardContainer<any>,
>(
  range1: Range1,
  range2: Range2,
  pred: BinaryPredicatorInferrer<Range1, Range2>,
): IForwardContainer.IteratorType<Range1>;

export function search<
  Range1 extends Array<any> | IForwardContainer<any>,
  Range2 extends Array<any> | IForwardContainer<any>,
>(
  range1: Range1,
  range2: Range2,
  pred: BinaryPredicatorInferrer<Range1, Range2> = <any>equal_to,
): IForwardContainer.IteratorType<Range1> {
  return base.search(
    begin(range1),
    end(range1),
    begin(range2),
    end(range2),
    pred,
  );
}

/**
 * Search specific and repeated elements.
 *
 * @param range An iterable ranged container.
 * @param count Count to be repeated.
 * @param val Value to search.
 * @param pred A binary function predicates two arguments are equal. Default is {@link equal_to}.
 *
 * @return Iterator to the first element of the repetition.
 */
export function search_n<Range extends Array<any> | IForwardContainer<any>>(
  range: Range,
  count: number,
  val: IForwardContainer.ValueType<Range>,
  pred: Comparator<IForwardContainer.ValueType<Range>> = equal_to,
): IForwardContainer.IteratorType<Range> {
  return base.search_n(begin(range), end(range), count, val, pred);
}

/**
 * Find the first mistmached position between two ranges.
 *
 * @param range1 The 1st iterable ranged container.
 * @param range2 The 2nd iterable ranged container.
 *
 * @return A {@link Pair} of mismatched positions.
 */
export function mismatch<
  Range1 extends Array<any> | IForwardContainer<any>,
  Range2 extends Array<any> | IForwardContainer.SimilarType<Range1>,
>(
  range1: Range1,
  range2: Range2,
): Pair<
  IForwardContainer.IteratorType<Range1>,
  IForwardContainer.IteratorType<Range2>
>;

/**
 * Find the first mistmached position between two ranges.
 *
 * @param range1 The 1st iterable ranged container.
 * @param range2 The 2nd iterable ranged container.
 * @param pred A binary function predicates two arguments are equal.
 *
 * @return A {@link Pair} of mismatched positions.
 */
export function mismatch<
  Range1 extends Array<any> | IForwardContainer<any>,
  Range2 extends Array<any> | IForwardContainer<any>,
>(
  range1: Range1,
  range2: Range2,
  pred: BinaryPredicatorInferrer<Range1, Range2>,
): Pair<
  IForwardContainer.IteratorType<Range1>,
  IForwardContainer.IteratorType<Range2>
>;

export function mismatch<
  Range1 extends Array<any> | IForwardContainer<any>,
  Range2 extends Array<any> | IForwardContainer<any>,
>(
  range1: Range1,
  range2: Range2,
  pred: BinaryPredicatorInferrer<Range1, Range2> = <any>equal_to,
): Pair<
  IForwardContainer.IteratorType<Range1>,
  IForwardContainer.IteratorType<Range2>
> {
  if (size(range1) === size(range2))
    return base.mismatch(begin(range1), end(range1), begin(range2), pred);

  const limit: number = Math.min(size(range1), size(range2));
  let x: IForwardContainer.IteratorType<Range1> = begin(range1);
  let y: IForwardContainer.IteratorType<Range2> = begin(range2);

  for (let i: number = 0; i < limit; ++i) {
    if (pred(x.value, y.value) === false) break;

    x = x.next();
    y = y.next();
  }
  return new Pair(x, y);
}

/* ---------------------------------------------------------
    COUNTERS
--------------------------------------------------------- */
/**
 * Count matched value in range.
 *
 * @param range An iterable ranged container.
 * @param val The value to count.
 *
 * @return The matched count.
 */
export function count<Range extends Array<any> | IForwardContainer<any>>(
  range: Range,
  val: IForwardContainer.ValueType<Range>,
): number {
  return base.count(begin(range), end(range), val);
}

/**
 * Count matched condition in range.
 *
 * @param range An iterable ranged container.
 * @param pred A function predicates the specific condition.
 *
 * @return The matched count.
 */
export function count_if<Range extends Array<any> | IForwardContainer<any>>(
  range: Range,
  pred: UnaryPredicator<IForwardContainer.ValueType<Range>>,
): number {
  return base.count_if(begin(range), end(range), pred);
}
