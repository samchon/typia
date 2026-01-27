//================================================================

/**
 * @packageDocumentation
 * @module std.ranges
 */
//================================================================
import * as base from "../../algorithm/modifiers";
import { IPointer } from "../../functional/IPointer";
import { equal_to } from "../../functional/comparators";
import { BinaryPredicator } from "../../internal/functional/BinaryPredicator";
import { Temporary } from "../../internal/functional/Temporary";
import { UnaryPredicator } from "../../internal/functional/UnaryPredicator";
import { Writeonly } from "../../internal/functional/Writeonly";
import { IBidirectionalIterator } from "../../iterator/IBidirectionalIterator";
import { IForwardIterator } from "../../iterator/IForwardIterator";
import { begin, end } from "../../iterator/factory";
import { IBidirectionalContainer } from "../container/IBidirectionalContainer";
import { IForwardContainer } from "../container/IForwardContainer";
import { IRandomAccessContainer } from "../container/IRandomAccessContainer";

type UnaryOperatorInferrer<
  Range extends Array<any> | IForwardContainer<any>,
  OutputIterator extends Writeonly<
    IForwardIterator<IPointer.ValueType<OutputIterator>, OutputIterator>
  >,
> = (
  val: IForwardContainer.ValueType<Range>,
) => IPointer.ValueType<OutputIterator>;

type BinaryOperatorInferrer<
  Range1 extends Array<any> | IForwardContainer<any>,
  Range2 extends Array<any> | IForwardContainer<any>,
  OutputIterator extends Writeonly<
    IForwardIterator<IPointer.ValueType<OutputIterator>, OutputIterator>
  >,
> = (
  x: IForwardContainer.ValueType<Range1>,
  y: IForwardContainer.ValueType<Range2>,
) => IPointer.ValueType<OutputIterator>;

/* ---------------------------------------------------------
    FILL
--------------------------------------------------------- */
/**
 * Copy elements in range.
 *
 * @param range An iterable ranged container.
 * @param output Output iterator of the first position.
 *
 * @return Output Iterator of the last position by advancing.
 */
export function copy<
  Range extends Array<any> | IForwardContainer<any>,
  OutputIterator extends Writeonly<
    IForwardIterator<IForwardContainer.ValueType<Range>, OutputIterator>
  >,
>(range: Range, output: OutputIterator): OutputIterator {
  return base.copy(begin(range), end(range), output);
}

/**
 * Copy *n* elements.
 *
 * @param range An iterable ranged container.
 * @param n Number of elements to copy.
 * @param output Output iterator of the first position.
 *
 * @return Output Iterator of the last position by advancing.
 */
export function copy_n<
  Range extends Array<any> | IForwardContainer<any>,
  OutputIterator extends Writeonly<
    IForwardIterator<IForwardContainer.ValueType<Range>, OutputIterator>
  >,
>(range: Range, n: number, output: OutputIterator): OutputIterator {
  return base.copy_n(begin(range), n, output);
}

/**
 * Copy specific elements by a condition.
 *
 * @param range An iterable ranged container.
 * @param output Output iterator of the first position.
 * @param pred A function predicates the specific condition.
 *
 * @return Output Iterator of the last position by advancing.
 */
export function copy_if<
  Range extends Array<any> | IForwardContainer<any>,
  OutputIterator extends Writeonly<
    IForwardIterator<IForwardContainer.ValueType<Range>, OutputIterator>
  >,
>(
  range: Range,
  output: OutputIterator,
  pred: UnaryPredicator<IForwardContainer.ValueType<Range>>,
): OutputIterator {
  return base.copy_if(begin(range), end(range), output, pred);
}

/**
 * Copy elements reversely.
 *
 * @param range An iterable ranged container.
 * @param output Output iterator of the first position.
 *
 * @return Output Iterator of the last position by advancing.
 */
export function copy_backward<
  Range extends Array<any> | IBidirectionalContainer<any, any>,
  OutputIterator extends Writeonly<
    IBidirectionalIterator<
      IBidirectionalContainer.ValueType<Range>,
      OutputIterator
    >
  >,
>(range: Range, output: OutputIterator): OutputIterator {
  return base.copy_backward(begin(range), end(range), <Temporary>output);
}

/**
 * Fill range elements
 *
 * @param range An iterable ranged container.
 * @param val The value to fill.
 *
 * @return Output Iterator of the last position by advancing.
 */
export function fill<Range extends Array<any> | IForwardContainer<any>>(
  range: Range,
  value: IForwardContainer.ValueType<Range>,
): void {
  return base.fill(begin(range), end(range), value);
}

/**
 * Fill *n* elements.
 *
 * @param range An iterable ranged container.
 * @param n Number of elements to fill.
 * @param val The value to fill.
 *
 * @return Output Iterator of the last position by advancing.
 */
export function fill_n<Range extends Array<any> | IForwardContainer<any>>(
  range: Range,
  n: number,
  value: IForwardContainer.ValueType<Range>,
): IForwardContainer.IteratorType<Range> {
  return base.fill_n(begin(range), n, value);
}

/**
 * Transform elements.
 *
 * @param range An iterable ranged container.
 * @param output Output iterator of the first position.
 * @param op Unary function determines the transform.
 *
 * @return Output Iterator of the last position by advancing.
 */
export function transform<
  Range extends Array<any> | IForwardContainer<any>,
  OutputIterator extends Writeonly<
    IForwardIterator<IPointer.ValueType<OutputIterator>, OutputIterator>
  >,
>(
  range: Range,
  result: OutputIterator,
  op: UnaryOperatorInferrer<Range, OutputIterator>,
): OutputIterator;

/**
 * Transform elements.
 *
 * @param range1 The 1st iterable ranged container.
 * @param range2 The 2nd iterable ranged container.
 * @param output Output iterator of the first position.
 * @param op Binary function determines the transform.
 *
 * @return Output Iterator of the last position by advancing.
 */
export function transform<
  Range1 extends Array<any> | IForwardContainer<any>,
  Range2 extends Array<any> | IForwardContainer<any>,
  OutputIterator extends Writeonly<
    IForwardIterator<IPointer.ValueType<OutputIterator>, OutputIterator>
  >,
>(
  range: Range1,
  first: Range2,
  result: OutputIterator,
  op: BinaryOperatorInferrer<Range1, Range2, OutputIterator>,
): OutputIterator;

export function transform<Range1 extends Array<any> | IForwardContainer<any>>(
  range1: Range1,
  ...args: any[]
): any {
  const fn: Function = base.transform.bind(
    undefined,
    begin(range1),
    end(range1),
  );
  if (args.length === 3) return fn(...args);
  // args: #4
  else return fn(end(args[1]), args[2], args[3]);
}

/**
 * Generate range elements.
 *
 * @param range An iterable ranged container.
 * @param gen The generator function.
 */
export function generate<Range extends Array<any> | IForwardContainer<any>>(
  range: Range,
  gen: () => IForwardContainer.ValueType<Range>,
): void {
  return base.generate(begin(range), end(range), gen);
}

/**
 * Generate *n* elements.
 *
 * @param range An iterable ranged container.
 * @param n Number of elements to generate.
 * @param gen The generator function.
 *
 * @return Forward Iterator to the last position by advancing.
 */
export function generate_n<Range extends Array<any> | IForwardContainer<any>>(
  range: Range,
  n: number,
  gen: () => IForwardContainer.ValueType<Range>,
): IForwardContainer.IteratorType<Range> {
  return base.generate_n(begin(range), n, gen);
}

/* ---------------------------------------------------------
    REMOVE
--------------------------------------------------------- */
/**
 * Test whether elements are unique in sorted range.
 *
 * @param range An iterable ranged container.
 * @param pred A binary function predicates two arguments are equal. Default is {@link equal_to}.
 *
 * @returns Whether unique or not.
 */
export function is_unique<Range extends Array<any> | IForwardContainer<any>>(
  range: Range,
  pred: BinaryPredicator<IForwardContainer.ValueType<Range>> = equal_to,
): boolean {
  return base.is_unique(begin(range), end(range), pred);
}

/**
 * Remove duplicated elements in sorted range.
 *
 * @param range An iterable ranged container.
 * @param pred A binary function predicates two arguments are equal. Default is {@link equal_to}.
 *
 * @return Input iterator to the last element not removed.
 */
export function unique<Range extends Array<any> | IForwardContainer<any>>(
  range: Range,
  pred: BinaryPredicator<IForwardContainer.ValueType<Range>> = equal_to,
): IForwardContainer.IteratorType<Range> {
  return base.unique(begin(range), end(range), pred);
}

/**
 * Copy elements in range without duplicates.
 *
 * @param range An iterable ranged container.
 * @param output Output iterator of the last position.
 * @param pred A binary function predicates two arguments are equal. Default is {@link equal_to}.
 *
 * @return Output Iterator of the last position by advancing.
 */
export function unique_copy<
  Range extends Array<any> | IForwardContainer<any>,
  OutputIterator extends Writeonly<
    IForwardIterator<IForwardContainer.ValueType<Range>, OutputIterator>
  >,
>(
  range: Range,
  output: OutputIterator,
  pred: BinaryPredicator<IForwardContainer.ValueType<Range>> = equal_to,
): OutputIterator {
  return base.unique_copy(begin(range), end(range), output, pred);
}

/**
 * Remove specific value in range.
 *
 * @param range An iterable ranged container.
 * @param val The specific value to remove.
 *
 * @return Iterator tho the last element not removed.
 */
export function remove<Range extends Array<any> | IForwardContainer<any>>(
  range: Range,
  val: IForwardContainer.ValueType<Range>,
): IForwardContainer.IteratorType<Range> {
  return base.remove(begin(range), end(range), val);
}

/**
 * Remove elements in range by a condition.
 *
 * @param range An iterable ranged container.
 * @param pred An unary function predicates remove.
 *
 * @return Iterator tho the last element not removed.
 */
export function remove_if<Range extends Array<any> | IForwardContainer<any>>(
  range: Range,
  pred: UnaryPredicator<IForwardContainer.ValueType<Range>>,
): IForwardContainer.IteratorType<Range> {
  return base.remove_if(begin(range), end(range), pred);
}

/**
 * Copy range removing specific value.
 *
 * @param range An iterable ranged container.
 * @param output Output iterator of the last position.
 * @param val The condition predicates remove.
 *
 * @return Output Iterator of the last position by advancing.
 */
export function remove_copy<
  Range extends Array<any> | IForwardContainer<any>,
  OutputIterator extends Writeonly<
    IForwardIterator<IForwardContainer.ValueType<Range>, OutputIterator>
  >,
>(
  range: Range,
  output: OutputIterator,
  val: IForwardContainer.ValueType<Range>,
): OutputIterator {
  return base.remove_copy(begin(range), end(range), output, val);
}

/**
 * Copy range removing elements by a condition.
 *
 * @param range An iterable ranged container.
 * @param output Output iterator of the last position.
 * @param pred An unary function predicates remove.
 *
 * @return Output Iterator of the last position by advancing.
 */
export function remove_copy_if<
  Range extends Array<any> | IForwardContainer<any>,
  OutputIterator extends Writeonly<
    IForwardIterator<IForwardContainer.ValueType<Range>, OutputIterator>
  >,
>(
  range: Range,
  output: OutputIterator,
  pred: UnaryPredicator<IForwardContainer.ValueType<Range>>,
): OutputIterator {
  return base.remove_copy_if(begin(range), end(range), output, pred);
}

/* ---------------------------------------------------------
    REPLACE & SWAP
--------------------------------------------------------- */
/**
 * Replace specific value in range.
 *
 * @param range An iterable ranged container.
 * @param old_val Specific value to change
 * @param new_val Specific value to be changed.
 */
export function replace<Range extends Array<any> | IForwardContainer<any>>(
  range: Range,
  old_val: IForwardContainer.ValueType<Range>,
  new_val: IForwardContainer.ValueType<Range>,
): void {
  return base.replace(begin(range), end(range), old_val, new_val);
}

/**
 * Replace specific condition in range.
 *
 * @param range An iterable ranged container.
 * @param pred An unary function predicates the change.
 * @param new_val Specific value to be changed.
 */
export function replace_if<Range extends Array<any> | IForwardContainer<any>>(
  range: Range,
  pred: UnaryPredicator<IForwardContainer.ValueType<Range>>,
  new_val: IForwardContainer.ValueType<Range>,
): void {
  return base.replace_if(begin(range), end(range), pred, new_val);
}

/**
 * Copy range replacing specific value.
 *
 * @param range An iterable ranged container.
 * @param output Output iterator of the first position.
 * @param old_val Specific value to change
 * @param new_val Specific value to be changed.
 *
 * @return Output Iterator of the last position by advancing.
 */
export function replace_copy<
  Range extends Array<any> | IForwardContainer<any>,
  OutputIterator extends Writeonly<
    IForwardIterator<IForwardContainer.ValueType<Range>, OutputIterator>
  >,
>(
  range: Range,
  output: OutputIterator,
  old_val: IForwardContainer.ValueType<Range>,
  new_val: IForwardContainer.ValueType<Range>,
): OutputIterator {
  return base.replace_copy(begin(range), end(range), output, old_val, new_val);
}

/**
 * Copy range replacing specfic condition.
 *
 * @param range An iterable ranged container.
 * @param output Output iterator of the first position.
 * @param pred An unary function predicates the change.
 * @param new_val Specific value to be changed.
 *
 * @return Output Iterator of the last position by advancing.
 */
export function replace_copy_if<
  Range extends Array<any> | IForwardContainer<any>,
  OutputIterator extends Writeonly<
    IForwardIterator<IForwardContainer.ValueType<Range>, OutputIterator>
  >,
>(
  range: Range,
  output: OutputIterator,
  pred: UnaryPredicator<IForwardContainer.ValueType<Range>>,
  new_val: IForwardContainer.ValueType<Range>,
): OutputIterator {
  return base.replace_copy_if(begin(range), end(range), output, pred, new_val);
}

/**
 * Swap values of two ranges.
 *
 * @param range1 The 1st iterable ranged container.
 * @param range2 The 2nd iterable ranged container.
 *
 * @return Forward Iterator of the last position of the 2nd range by advancing.
 */
export function swap_ranges<
  Range1 extends Array<any> | IForwardContainer<any>,
  Range2 extends IForwardContainer.SimilarType<Range1>,
>(range1: Range1, range2: Range2): IForwardContainer.IteratorType<Range2> {
  return base.swap_ranges(begin(range1), end(range1), <Temporary>begin(range2));
}

/* ---------------------------------------------------------
    RE-ARRANGEMENT
--------------------------------------------------------- */
/**
 * Reverse elements in range.
 *
 * @param range An iterable ranged container.
 */
export function reverse<
  Range extends Array<any> | IBidirectionalContainer<any, any>,
>(range: Range): void {
  return base.reverse(begin(range), end(range));
}

/**
 * Copy reversed elements in range.
 *
 * @param range An iterable ranged container.
 * @param output Output iterator of the first position.
 *
 * @return Output Iterator of the last position by advancing.
 */
export function reverse_copy<
  Range extends Array<any> | IBidirectionalContainer<any, any>,
  OutputIterator extends Writeonly<
    IForwardIterator<IForwardContainer.ValueType<Range>, OutputIterator>
  >,
>(range: Range, output: OutputIterator): OutputIterator {
  return base.reverse_copy(begin(range), end(range), output);
}

export function shift_left<Range extends Array<any> | IForwardContainer<any>>(
  range: Range,
  n: number,
): void {
  return base.shift_left(begin(range), end(range), n);
}

export function shift_right<
  Range extends Array<any> | IBidirectionalContainer<any, any>,
>(range: Range, n: number): void {
  return base.shift_right(begin(range), end(range), n);
}

/**
 * Rotate elements in range.
 *
 * @param range An iterable ranged container.
 * @param middle Input iteartor of the initial position of the right side.
 *
 * @return Input iterator of the final position in the left side; *middle*.
 */
export function rotate<Range extends Array<any> | IForwardContainer<any>>(
  range: Range,
  middle: IForwardContainer.IteratorType<Range>,
): IForwardContainer.IteratorType<Range> {
  return base.rotate(begin(range), middle, end(range));
}

/**
 * Copy rotated elements in range.
 *
 * @param range An iterable ranged container.
 * @param middle Input iteartor of the initial position of the right side.
 * @param output Output iterator of the last position.
 *
 * @return Output Iterator of the last position by advancing.
 */
export function rotate_copy<
  Range extends Array<any> | IForwardContainer<any>,
  OutputIterator extends Writeonly<
    IForwardIterator<IForwardContainer.ValueType<Range>, OutputIterator>
  >,
>(
  range: Range,
  middle: IForwardContainer.IteratorType<Range>,
  output: OutputIterator,
): OutputIterator {
  return base.rotate_copy(begin(range), middle, end(range), output);
}

/**
 * Shuffle elements in range.
 *
 * @param range An iterable ranged container.
 */
export function shuffle<Range extends Array<any> | IRandomAccessContainer<any>>(
  range: Range,
): void {
  return base.shuffle(begin(range), end(range));
}
