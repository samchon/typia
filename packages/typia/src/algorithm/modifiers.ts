//================================================================

/**
 * @packageDocumentation
 * @module std
 */
//================================================================
import { IPointer } from "../functional/IPointer";
import { equal_to } from "../functional/comparators";
import { BinaryPredicator } from "../internal/functional/BinaryPredicator";
import { General } from "../internal/functional/General";
import { UnaryPredicator } from "../internal/functional/UnaryPredicator";
import { Writeonly } from "../internal/functional/Writeonly";
import { IBidirectionalIterator } from "../iterator/IBidirectionalIterator";
import { IForwardIterator } from "../iterator/IForwardIterator";
import { IRandomAccessIterator } from "../iterator/IRandomAccessIterator";
import { advance } from "../iterator/global";
import { randint } from "./random";

type UnaryOperatorInferrer<
  InputIterator extends Readonly<
    IForwardIterator<IPointer.ValueType<InputIterator>, InputIterator>
  >,
  OutputIterator extends Writeonly<
    IForwardIterator<IPointer.ValueType<OutputIterator>, OutputIterator>
  >,
> = (
  val: IPointer.ValueType<InputIterator>,
) => IPointer.ValueType<OutputIterator>;

type BinaryOperatorInferrer<
  InputIterator1 extends Readonly<
    IForwardIterator<IPointer.ValueType<InputIterator1>, InputIterator1>
  >,
  InputIterator2 extends Readonly<
    IForwardIterator<IPointer.ValueType<InputIterator2>, InputIterator2>
  >,
  OutputIterator extends Writeonly<
    IForwardIterator<IPointer.ValueType<OutputIterator>, OutputIterator>
  >,
> = (
  x: IPointer.ValueType<InputIterator1>,
  y: IPointer.ValueType<InputIterator2>,
) => IPointer.ValueType<OutputIterator>;

/* =========================================================
    MODIFIERS (MODIFYING SEQUENCE)
        - FILL
        - REMOVE
        - REPLACE & SWAP
        - RE-ARRANGEMENT
============================================================
    FILL
--------------------------------------------------------- */
/**
 * Copy elements in range.
 *
 * @param first Input iteartor of the first position.
 * @param last Input iterator of the last position.
 * @param output Output iterator of the first position.
 *
 * @return Output Iterator of the last position by advancing.
 */
export function copy<
  InputIterator extends Readonly<
    IForwardIterator<IPointer.ValueType<InputIterator>, InputIterator>
  >,
  OutputIterator extends Writeonly<
    IForwardIterator<IPointer.ValueType<InputIterator>, OutputIterator>
  >,
>(
  first: InputIterator,
  last: InputIterator,
  output: OutputIterator,
): OutputIterator {
  for (; !first.equals(last); first = first.next()) {
    output.value = first.value;
    output = output.next();
  }
  return output;
}

/**
 * Copy *n* elements.
 *
 * @param first Input iteartor of the first position.
 * @param n Number of elements to copy.
 * @param output Output iterator of the first position.
 *
 * @return Output Iterator of the last position by advancing.
 */
export function copy_n<
  InputIterator extends Readonly<
    IForwardIterator<IPointer.ValueType<InputIterator>, InputIterator>
  >,
  OutputIterator extends Writeonly<
    IForwardIterator<IPointer.ValueType<InputIterator>, OutputIterator>
  >,
>(first: InputIterator, n: number, output: OutputIterator): OutputIterator {
  for (let i: number = 0; i < n; ++i) {
    output.value = first.value;

    first = first.next();
    output = output.next();
  }
  return output;
}

/**
 * Copy specific elements by a condition.
 *
 * @param first Input iteartor of the first position.
 * @param last Input iterator of the last position.
 * @param output Output iterator of the first position.
 * @param pred A function predicates the specific condition.
 *
 * @return Output Iterator of the last position by advancing.
 */
export function copy_if<
  InputIterator extends Readonly<
    IForwardIterator<IPointer.ValueType<InputIterator>, InputIterator>
  >,
  OutputIterator extends Writeonly<
    IForwardIterator<IPointer.ValueType<InputIterator>, OutputIterator>
  >,
>(
  first: InputIterator,
  last: InputIterator,
  output: OutputIterator,
  pred: UnaryPredicator<IPointer.ValueType<InputIterator>>,
): OutputIterator {
  for (; !first.equals(last); first = first.next()) {
    if (!pred(first.value)) continue;

    output.value = first.value;
    output = output.next();
  }
  return output;
}

/**
 * Copy elements reversely.
 *
 * @param first Input iteartor of the first position.
 * @param last Input iterator of the last position.
 * @param output Output iterator of the first position.
 *
 * @return Output Iterator of the last position by advancing.
 */
export function copy_backward<
  InputIterator extends Readonly<
    IBidirectionalIterator<IPointer.ValueType<InputIterator>, InputIterator>
  >,
  OutputIterator extends Writeonly<
    IBidirectionalIterator<IPointer.ValueType<InputIterator>, OutputIterator>
  >,
>(
  first: InputIterator,
  last: InputIterator,
  output: OutputIterator,
): OutputIterator {
  last = last.prev();

  while (!last.equals(first)) {
    last = last.prev();
    output = output.prev();

    output.value = last.value;
  }
  return output;
}

/**
 * Fill range elements
 *
 * @param first Input iteartor of the first position.
 * @param last Input iterator of the last position.
 * @param val The value to fill.
 *
 * @return Output Iterator of the last position by advancing.
 */
export function fill<
  ForwardIterator extends Writeonly<
    IForwardIterator<IPointer.ValueType<ForwardIterator>, ForwardIterator>
  >,
>(
  first: ForwardIterator,
  last: ForwardIterator,
  val: IPointer.ValueType<ForwardIterator>,
): void {
  for (; !first.equals(last); first = first.next()) first.value = val;
}

/**
 * Fill *n* elements.
 *
 * @param first Input iteartor of the first position.
 * @param n Number of elements to fill.
 * @param val The value to fill.
 *
 * @return Output Iterator of the last position by advancing.
 */
export function fill_n<
  OutputIterator extends Writeonly<
    IForwardIterator<IPointer.ValueType<OutputIterator>, OutputIterator>
  >,
>(
  first: OutputIterator,
  n: number,
  val: IPointer.ValueType<OutputIterator>,
): OutputIterator {
  for (let i: number = 0; i < n; ++i) {
    first.value = val;
    first = first.next();
  }
  return first;
}

/**
 * Transform elements.
 *
 * @param first Input iteartor of the first position.
 * @param last Input iterator of the last position.
 * @param output Output iterator of the first position.
 * @param op Unary function determines the transform.
 *
 * @return Output Iterator of the last position by advancing.
 */
export function transform<
  InputIterator extends Readonly<
    IForwardIterator<IPointer.ValueType<InputIterator>, InputIterator>
  >,
  OutputIterator extends Writeonly<
    IForwardIterator<IPointer.ValueType<OutputIterator>, OutputIterator>
  >,
>(
  first: InputIterator,
  last: InputIterator,
  result: OutputIterator,
  op: UnaryOperatorInferrer<InputIterator, OutputIterator>,
): OutputIterator;

/**
 * Transform elements.
 *
 * @param first1 Input iteartor of the first position of the 1st range.
 * @param last1 Input iterator of the last position of the 1st range.
 * @param first2 Input iterator of the first position of the 2nd range.
 * @param output Output iterator of the first position.
 * @param op Binary function determines the transform.
 *
 * @return Output Iterator of the last position by advancing.
 */
export function transform<
  InputIterator1 extends Readonly<
    IForwardIterator<IPointer.ValueType<InputIterator1>, InputIterator1>
  >,
  InputIterator2 extends Readonly<
    IForwardIterator<IPointer.ValueType<InputIterator2>, InputIterator2>
  >,
  OutputIterator extends Writeonly<
    IForwardIterator<IPointer.ValueType<OutputIterator>, OutputIterator>
  >,
>(
  first1: InputIterator1,
  last1: InputIterator1,
  first2: InputIterator2,
  result: OutputIterator,
  op: BinaryOperatorInferrer<InputIterator1, InputIterator2, OutputIterator>,
): OutputIterator;

export function transform(...args: any[]): any {
  if (args.length === 4) return (_Unary_transform as Function)(...args);
  // args: #5
  else return (_Binary_transform as Function)(...args);
}

function _Unary_transform<
  InputIterator extends Readonly<
    IForwardIterator<IPointer.ValueType<InputIterator>, InputIterator>
  >,
  OutputIterator extends Writeonly<
    IForwardIterator<IPointer.ValueType<OutputIterator>, OutputIterator>
  >,
>(
  first: InputIterator,
  last: InputIterator,
  result: OutputIterator,
  op: UnaryOperatorInferrer<InputIterator, OutputIterator>,
): OutputIterator {
  for (; !first.equals(last); first = first.next()) {
    result.value = op(first.value);
    result = result.next();
  }
  return result;
}

function _Binary_transform<
  InputIterator1 extends Readonly<
    IForwardIterator<IPointer.ValueType<InputIterator1>, InputIterator1>
  >,
  InputIterator2 extends Readonly<
    IForwardIterator<IPointer.ValueType<InputIterator2>, InputIterator2>
  >,
  OutputIterator extends Writeonly<
    IForwardIterator<IPointer.ValueType<OutputIterator>, OutputIterator>
  >,
>(
  first1: InputIterator1,
  last1: InputIterator1,
  first2: InputIterator2,
  result: OutputIterator,
  binary_op: BinaryOperatorInferrer<
    InputIterator1,
    InputIterator2,
    OutputIterator
  >,
): OutputIterator {
  while (!first1.equals(last1)) {
    result.value = binary_op(first1.value, first2.value);

    first1 = first1.next();
    first2 = first2.next();
    result = result.next();
  }
  return result;
}

/**
 * Generate range elements.
 *
 * @param first Forward iteartor of the first position.
 * @param last Forward iterator of the last position.
 * @param gen The generator function.
 */
export function generate<
  ForwardIterator extends Writeonly<
    IForwardIterator<IPointer.ValueType<ForwardIterator>, ForwardIterator>
  >,
>(
  first: ForwardIterator,
  last: ForwardIterator,
  gen: () => IPointer.ValueType<ForwardIterator>,
): void {
  for (; !first.equals(last); first = first.next()) first.value = gen();
}

/**
 * Generate *n* elements.
 *
 * @param first Forward iteartor of the first position.
 * @param n Number of elements to generate.
 * @param gen The generator function.
 *
 * @return Forward Iterator to the last position by advancing.
 */
export function generate_n<
  ForwardIterator extends Writeonly<
    IForwardIterator<IPointer.ValueType<ForwardIterator>, ForwardIterator>
  >,
>(
  first: ForwardIterator,
  n: number,
  gen: () => IPointer.ValueType<ForwardIterator>,
): ForwardIterator {
  while (n-- > 0) {
    first.value = gen();
    first = first.next();
  }
  return first;
}

/* ---------------------------------------------------------
    REMOVE
--------------------------------------------------------- */
/**
 * Test whether elements are unique in sorted range.
 *
 * @param first Input iteartor of the first position.
 * @param last Input iterator of the last position.
 * @param pred A binary function predicates two arguments are equal. Default is {@link equal_to}.
 *
 * @returns Whether unique or not.
 */
export function is_unique<
  InputIterator extends General<
    IForwardIterator<IPointer.ValueType<InputIterator>, InputIterator>
  >,
>(
  first: InputIterator,
  last: InputIterator,
  pred: BinaryPredicator<IPointer.ValueType<InputIterator>> = equal_to,
): boolean {
  if (first.equals(last)) return true;

  let next: InputIterator = first.next();
  for (; !next.equals(last); next = next.next()) {
    if (pred(first.value, next.value) === true) return false;
    first = first.next();
  }
  return true;
}

/**
 * Remove duplicated elements in sorted range.
 *
 * @param first Input iteartor of the first position.
 * @param last Input iterator of the last position.
 * @param pred A binary function predicates two arguments are equal. Default is {@link equal_to}.
 *
 * @return Input iterator to the last element not removed.
 */
export function unique<
  InputIterator extends General<
    IForwardIterator<IPointer.ValueType<InputIterator>, InputIterator>
  >,
>(
  first: InputIterator,
  last: InputIterator,
  pred: BinaryPredicator<IPointer.ValueType<InputIterator>> = equal_to,
): InputIterator {
  if (first.equals(last)) return last;

  let ret: InputIterator = first;
  for (first = first.next(); !first.equals(last); first = first.next())
    if (!pred(ret.value, first.value)) {
      ret = ret.next();
      ret.value = first.value;
    }
  return ret.next();
}

/**
 * Copy elements in range without duplicates.
 *
 * @param first Input iteartor of the first position.
 * @param last Input iterator of the last position.
 * @param output Output iterator of the last position.
 * @param pred A binary function predicates two arguments are equal. Default is {@link equal_to}.
 *
 * @return Output Iterator of the last position by advancing.
 */
export function unique_copy<
  InputIterator extends Readonly<
    IForwardIterator<IPointer.ValueType<InputIterator>, InputIterator>
  >,
  OutputIterator extends Writeonly<
    IForwardIterator<IPointer.ValueType<InputIterator>, OutputIterator>
  >,
>(
  first: InputIterator,
  last: InputIterator,
  output: OutputIterator,
  pred: BinaryPredicator<IPointer.ValueType<InputIterator>> = equal_to,
): OutputIterator {
  if (first.equals(last)) return output;

  output.value = first.value;
  first = first.next();

  for (; !first.equals(last); first = first.next())
    if (!pred(first.value, output.value)) {
      output = output.next();
      output.value = first.value;
    }
  return output.next();
}

/**
 * Remove specific value in range.
 *
 * @param first Input iteartor of the first position.
 * @param last Input iterator of the last position.
 * @param val The specific value to remove.
 *
 * @return Iterator tho the last element not removed.
 */
export function remove<
  InputIterator extends General<
    IForwardIterator<IPointer.ValueType<InputIterator>, InputIterator>
  >,
>(
  first: InputIterator,
  last: InputIterator,
  val: IPointer.ValueType<InputIterator>,
): InputIterator {
  return remove_if(first, last, (elem) => equal_to(elem, val));
}

/**
 * Remove elements in range by a condition.
 *
 * @param first Input iteartor of the first position.
 * @param last Input iterator of the last position.
 * @param pred An unary function predicates remove.
 *
 * @return Iterator tho the last element not removed.
 */
export function remove_if<
  InputIterator extends General<
    IForwardIterator<IPointer.ValueType<InputIterator>, InputIterator>
  >,
>(
  first: InputIterator,
  last: InputIterator,
  pred: UnaryPredicator<IPointer.ValueType<InputIterator>>,
): InputIterator {
  let ret: InputIterator = first;

  while (!first.equals(last)) {
    if (!pred(first.value)) {
      ret.value = first.value;
      ret = ret.next();
    }
    first = first.next();
  }
  return ret;
}

/**
 * Copy range removing specific value.
 *
 * @param first Input iteartor of the first position.
 * @param last Input iterator of the last position.
 * @param output Output iterator of the last position.
 * @param val The condition predicates remove.
 *
 * @return Output Iterator of the last position by advancing.
 */
export function remove_copy<
  InputIterator extends Readonly<
    IForwardIterator<IPointer.ValueType<InputIterator>, InputIterator>
  >,
  OutputIterator extends Writeonly<
    IForwardIterator<IPointer.ValueType<InputIterator>, OutputIterator>
  >,
>(
  first: InputIterator,
  last: InputIterator,
  output: OutputIterator,
  val: IPointer.ValueType<InputIterator>,
): OutputIterator {
  return remove_copy_if(first, last, output, (elem) => equal_to(elem, val));
}

/**
 * Copy range removing elements by a condition.
 *
 * @param first Input iteartor of the first position.
 * @param last Input iterator of the last position.
 * @param output Output iterator of the last position.
 * @param pred An unary function predicates remove.
 *
 * @return Output Iterator of the last position by advancing.
 */
export function remove_copy_if<
  InputIterator extends Readonly<
    IForwardIterator<IPointer.ValueType<InputIterator>, InputIterator>
  >,
  OutputIterator extends Writeonly<
    IForwardIterator<IPointer.ValueType<InputIterator>, OutputIterator>
  >,
>(
  first: InputIterator,
  last: InputIterator,
  output: OutputIterator,
  pred: UnaryPredicator<IPointer.ValueType<InputIterator>>,
): OutputIterator {
  for (; !first.equals(last); first = first.next()) {
    if (pred(first.value)) continue;

    output.value = first.value;
    output = output.next();
  }

  return output;
}

/* ---------------------------------------------------------
    REPLACE & SWAP
--------------------------------------------------------- */
/**
 * Replace specific value in range.
 *
 * @param first Input iteartor of the first position.
 * @param last Input iterator of the last position.
 * @param old_val Specific value to change
 * @param new_val Specific value to be changed.
 */
export function replace<
  InputIterator extends General<
    IForwardIterator<IPointer.ValueType<InputIterator>, InputIterator>
  >,
>(
  first: InputIterator,
  last: InputIterator,
  old_val: IPointer.ValueType<InputIterator>,
  new_val: IPointer.ValueType<InputIterator>,
): void {
  return replace_if(first, last, (elem) => equal_to(elem, old_val), new_val);
}

/**
 * Replace specific condition in range.
 *
 * @param first Input iteartor of the first position.
 * @param last Input iterator of the last position.
 * @param pred An unary function predicates the change.
 * @param new_val Specific value to be changed.
 */
export function replace_if<
  InputIterator extends General<
    IForwardIterator<IPointer.ValueType<InputIterator>, InputIterator>
  >,
>(
  first: InputIterator,
  last: InputIterator,
  pred: UnaryPredicator<IPointer.ValueType<InputIterator>>,
  new_val: IPointer.ValueType<InputIterator>,
): void {
  for (let it = first; !it.equals(last); it = it.next())
    if (pred(it.value) === true) it.value = new_val;
}

/**
 * Copy range replacing specific value.
 *
 * @param first Input iteartor of the first position.
 * @param last Input iterator of the last position.
 * @param output Output iterator of the first position.
 * @param old_val Specific value to change
 * @param new_val Specific value to be changed.
 *
 * @return Output Iterator of the last position by advancing.
 */
export function replace_copy<
  InputIterator extends Readonly<
    IForwardIterator<IPointer.ValueType<InputIterator>, InputIterator>
  >,
  OutputIterator extends Writeonly<
    IForwardIterator<IPointer.ValueType<InputIterator>, OutputIterator>
  >,
>(
  first: InputIterator,
  last: InputIterator,
  output: OutputIterator,
  old_val: IPointer.ValueType<InputIterator>,
  new_val: IPointer.ValueType<InputIterator>,
): OutputIterator {
  return replace_copy_if(
    first,
    last,
    output,
    (elem) => equal_to(elem, old_val),
    new_val,
  );
}

/**
 * Copy range replacing specfic condition.
 *
 * @param first Input iteartor of the first position.
 * @param last Input iterator of the last position.
 * @param output Output iterator of the first position.
 * @param pred An unary function predicates the change.
 * @param new_val Specific value to be changed.
 *
 * @return Output Iterator of the last position by advancing.
 */
export function replace_copy_if<
  InputIterator extends Readonly<
    IForwardIterator<IPointer.ValueType<InputIterator>, InputIterator>
  >,
  OutputIterator extends Writeonly<
    IForwardIterator<IPointer.ValueType<InputIterator>, OutputIterator>
  >,
>(
  first: InputIterator,
  last: InputIterator,
  result: OutputIterator,
  pred: UnaryPredicator<IPointer.ValueType<InputIterator>>,
  new_val: IPointer.ValueType<InputIterator>,
): OutputIterator {
  for (; !first.equals(last); first = first.next()) {
    if (pred(first.value)) result.value = new_val;
    else result.value = first.value;

    result = result.next();
  }

  return result;
}

/**
 * Swap values of two iterators.
 *
 * @param x Forward iterator to swap its value.
 * @param y Forward iterator to swap its value.
 */
export function iter_swap<
  ForwardIterator1 extends General<
    IForwardIterator<IPointer.ValueType<ForwardIterator1>, ForwardIterator1>
  >,
  ForwardIterator2 extends General<
    IForwardIterator<IPointer.ValueType<ForwardIterator1>, ForwardIterator2>
  >,
>(x: ForwardIterator1, y: ForwardIterator2): void {
  [x.value, y.value] = [y.value, x.value];
}

/**
 * Swap values of two ranges.
 *
 * @param first1 Forward iteartor of the first position of the 1st range.
 * @param last1 Forward iterator of the last position of the 1st range.
 * @param first2 Forward iterator of the first position of the 2nd range.
 *
 * @return Forward Iterator of the last position of the 2nd range by advancing.
 */
export function swap_ranges<
  ForwardIterator1 extends General<
    IForwardIterator<IPointer.ValueType<ForwardIterator1>, ForwardIterator1>
  >,
  ForwardIterator2 extends General<
    IForwardIterator<IPointer.ValueType<ForwardIterator1>, ForwardIterator2>
  >,
>(
  first1: ForwardIterator1,
  last1: ForwardIterator1,
  first2: ForwardIterator2,
): ForwardIterator2 {
  for (; !first1.equals(last1); first1 = first1.next()) {
    iter_swap(first1, first2);
    first2 = first2.next();
  }
  return first2;
}

/* ---------------------------------------------------------
    RE-ARRANGEMENT
--------------------------------------------------------- */
/**
 * Reverse elements in range.
 *
 * @param first Bidirectional iterator of the first position.
 * @param last Bidirectional iterator of the last position.
 */
export function reverse<
  BidirectionalIterator extends General<
    IBidirectionalIterator<
      IPointer.ValueType<BidirectionalIterator>,
      BidirectionalIterator
    >
  >,
>(first: BidirectionalIterator, last: BidirectionalIterator): void {
  // first !== last && first !== --last
  while (
    first.equals(last) === false &&
    first.equals((last = last.prev())) === false
  ) {
    iter_swap(first, last);
    first = first.next();
  }
}

/**
 * Copy reversed elements in range.
 *
 * @param first Bidirectional iterator of the first position.
 * @param last Bidirectional iterator of the last position.
 * @param output Output iterator of the first position.
 *
 * @return Output Iterator of the last position by advancing.
 */
export function reverse_copy<
  BidirectionalIterator extends Readonly<
    IBidirectionalIterator<
      IPointer.ValueType<BidirectionalIterator>,
      BidirectionalIterator
    >
  >,
  OutputIterator extends Writeonly<
    IForwardIterator<IPointer.ValueType<BidirectionalIterator>, OutputIterator>
  >,
>(
  first: BidirectionalIterator,
  last: BidirectionalIterator,
  output: OutputIterator,
): OutputIterator {
  while (!last.equals(first)) {
    last = last.prev();

    output.value = last.value;
    output = output.next();
  }
  return output;
}

export function shift_left<
  ForwardIterator extends General<
    IForwardIterator<IPointer.ValueType<ForwardIterator>, ForwardIterator>
  >,
>(first: ForwardIterator, last: ForwardIterator, n: number): ForwardIterator {
  const mid = advance(first, n);
  return copy(mid, last, first);
}

export function shift_right<
  ForwardIterator extends General<
    IBidirectionalIterator<IPointer.ValueType<ForwardIterator>, ForwardIterator>
  >,
>(first: ForwardIterator, last: ForwardIterator, n: number): ForwardIterator {
  const mid = advance(last, -n);
  return copy_backward(first, mid, last);
}

/**
 * Rotate elements in range.
 *
 * @param first Input iteartor of the first position.
 * @param middle Input iteartor of the initial position of the right side.
 * @param last Input iteartor of the last position.
 *
 * @return Input iterator of the final position in the left side; *middle*.
 */
export function rotate<
  InputIterator extends General<
    IForwardIterator<IPointer.ValueType<InputIterator>, InputIterator>
  >,
>(
  first: InputIterator,
  middle: InputIterator,
  last: InputIterator,
): InputIterator {
  while (!first.equals(middle) && !middle.equals(last)) {
    iter_swap(first, middle);

    first = first.next();
    middle = middle.next();
  }
  return first;
}

/**
 * Copy rotated elements in range.
 *
 * @param first Input iteartor of the first position.
 * @param middle Input iteartor of the initial position of the right side.
 * @param last Input iteartor of the last position.
 * @param output Output iterator of the last position.
 *
 * @return Output Iterator of the last position by advancing.
 */
export function rotate_copy<
  ForwardIterator extends Readonly<
    IForwardIterator<IPointer.ValueType<ForwardIterator>, ForwardIterator>
  >,
  OutputIterator extends Writeonly<
    IForwardIterator<IPointer.ValueType<ForwardIterator>, OutputIterator>
  >,
>(
  first: ForwardIterator,
  middle: ForwardIterator,
  last: ForwardIterator,
  output: OutputIterator,
): OutputIterator {
  output = copy(middle, last, output);
  return copy(first, middle, output);
}

/**
 * Shuffle elements in range.
 *
 * @param first Random access iteartor of the first position.
 * @param last Random access iteartor of the last position.
 */
export function shuffle<
  RandomAccessIterator extends General<
    IRandomAccessIterator<
      IPointer.ValueType<RandomAccessIterator>,
      RandomAccessIterator
    >
  >,
>(first: RandomAccessIterator, last: RandomAccessIterator): void {
  for (let it = first; !it.equals(last); it = it.next()) {
    const rand_index: number = randint(first.index(), last.index() - 1);
    if (it.index() !== rand_index) iter_swap(it, first.advance(rand_index));
  }
}
