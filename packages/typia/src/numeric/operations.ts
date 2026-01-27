//================================================================

/**
 * @packageDocumentation
 * @module std
 */
//================================================================
import { IPointer } from "../functional/IPointer";
import { General } from "../internal/functional/General";
import { Writeonly } from "../internal/functional/Writeonly";
import { IForwardIterator } from "../iterator/IForwardIterator";
import { minus, multiplies, plus } from "./operators";

/**
 * Greatest Common Divider.
 */
export function gcd(x: number, y: number): number {
  y = y.valueOf(); // `Number` to `number`
  while (y !== 0) [x, y] = [y, x % y];

  return x;
}

/**
 * Least Common Multiple.
 */
export function lcm(x: number, y: number): number {
  return (x * y) / gcd(x, y);
}

/* ---------------------------------------------------------
    COMMON ALGORITHMS
--------------------------------------------------------- */
export function iota<
  ForwardIterator extends General<IForwardIterator<number, ForwardIterator>>,
>(first: ForwardIterator, last: ForwardIterator, value: number): void {
  for (; !first.equals(last); first = first.next()) first.value = value++;
}

export function accumulate<
  InputIterator extends General<
    IForwardIterator<IPointer.ValueType<InputIterator>, InputIterator>
  >,
>(
  first: InputIterator,
  last: InputIterator,
  init: IPointer.ValueType<InputIterator>,
  op: Operator<InputIterator, InputIterator> = <any>plus,
): IPointer.ValueType<InputIterator> {
  for (; !first.equals(last); first = first.next())
    init = op(init, first.value);

  return init;
}

export function inner_product<
  InputIterator1 extends General<
    IForwardIterator<IPointer.ValueType<InputIterator1>, InputIterator1>
  >,
  InputIterator2 extends General<
    IForwardIterator<IPointer.ValueType<InputIterator2>, InputIterator2>
  >,
>(
  first1: InputIterator1,
  last1: InputIterator1,
  first2: InputIterator2,
  value: IPointer.ValueType<InputIterator1>,
  adder: Operator<InputIterator1, InputIterator1> = <any>plus,
  multiplier: Operator<InputIterator1, InputIterator2> = <any>multiplies,
): IPointer.ValueType<InputIterator1> {
  for (; !first1.equals(last1); first1 = first1.next()) {
    value = adder(value, multiplier(first1.value, first2.value));
    first2 = first2.next();
  }
  return value;
}

export function adjacent_difference<
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
  subtracter: Operator<InputIterator, InputIterator> = <any>minus,
): OutputIterator {
  if (first.equals(last)) return output;

  // INITIALIZE
  let before: IPointer.ValueType<InputIterator>;
  [first, <any>output, before] = _Initialize<InputIterator, InputIterator>(
    first,
    <any>output,
  );

  // COMPUTE OPERATIONS
  for (; !first.equals(last); first = first.next()) {
    output.value = subtracter(first.value, before);

    before = first.value;
    output = output.next();
  }
  return output;
}

export function partial_sum<
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
  adder: Operator<InputIterator, InputIterator> = <any>plus,
): OutputIterator {
  if (first.equals(last)) return output;

  // INITIALIZE
  let sum: IPointer.ValueType<InputIterator>;
  [first, <any>output, sum] = _Initialize<InputIterator, InputIterator>(
    first,
    <any>output,
  );

  // COMPUTE OPERATIONS
  for (; !first.equals(last); first = first.next()) {
    sum = adder(sum, first.value);

    output.value = sum;
    output = output.next();
  }
  return output;
}

/* ---------------------------------------------------------
    PREFIX SUMS
--------------------------------------------------------- */
export function inclusive_scan<
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
  adder: Operator<InputIterator, InputIterator> = <any>plus,
  init?: IPointer.ValueType<InputIterator>,
): OutputIterator {
  return transform_inclusive_scan(
    first,
    last,
    <any>output,
    adder,
    (val) => val,
    init,
  );
}

export function exclusive_scan<
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
  init: IPointer.ValueType<InputIterator>,
  op: Operator<InputIterator, InputIterator> = <any>plus,
): OutputIterator {
  return transform_exclusive_scan(
    first,
    last,
    <any>output,
    init,
    op,
    (val) => val,
  );
}

export function transform_inclusive_scan<
  InputIterator extends Readonly<
    IForwardIterator<IPointer.ValueType<InputIterator>, InputIterator>
  >,
  OutputIterator extends Writeonly<
    IForwardIterator<IPointer.ValueType<OutputIterator>, OutputIterator>
  >,
>(
  first: InputIterator,
  last: InputIterator,
  output: OutputIterator,
  binary: Operator<OutputIterator, OutputIterator>,
  unary: Transformer<InputIterator, OutputIterator>,
  init?: IPointer.ValueType<InputIterator>,
): OutputIterator {
  if (first.equals(last)) return output;

  // INITIALIZE
  let before: IPointer.ValueType<OutputIterator>;
  [first, output, before] = _Transform_initialize(first, output, unary, init);

  // COMPUTE OPERATIONS
  for (; !first.equals(last); first = first.next()) {
    before = binary(before, unary(first.value));

    output.value = before;
    output = output.next();
  }
  return output;
}

export function transform_exclusive_scan<
  InputIterator extends Readonly<
    IForwardIterator<IPointer.ValueType<InputIterator>, InputIterator>
  >,
  OutputIterator extends Writeonly<
    IForwardIterator<IPointer.ValueType<OutputIterator>, OutputIterator>
  >,
>(
  first: InputIterator,
  last: InputIterator,
  output: OutputIterator,
  init: IPointer.ValueType<InputIterator>,
  binary: Operator<OutputIterator, OutputIterator>,
  unary: Transformer<InputIterator, OutputIterator>,
): OutputIterator {
  if (first.equals(last)) return output;

  // INITIALIZE
  let x: IPointer.ValueType<OutputIterator> = unary(first.value);
  let y: IPointer.ValueType<OutputIterator>;
  [first, output, y] = _Transform_initialize(first, output, unary, init);

  // COMPUTE OPERATIONS
  for (; !first.equals(last); first = first.next()) {
    y = binary(x, y);
    x = unary(first.value);

    output.value = y;
    output = output.next();
  }
  return output;
}

/* ---------------------------------------------------------
    BACK-GROUNDS
--------------------------------------------------------- */
type Operator<
  Iterator1 extends Readonly<
    IForwardIterator<IPointer.ValueType<Iterator1>, Iterator1>
  >,
  Iterator2 extends Readonly<
    IForwardIterator<IPointer.ValueType<Iterator2>, Iterator2>
  >,
> = (
  x: IPointer.ValueType<Iterator1>,
  y: IPointer.ValueType<Iterator2>,
) => IPointer.ValueType<Iterator1>;

type Transformer<
  InputIterator extends Readonly<
    IForwardIterator<IPointer.ValueType<InputIterator>, InputIterator>
  >,
  OutputIterator extends Writeonly<
    IForwardIterator<IPointer.ValueType<OutputIterator>, OutputIterator>
  >,
> = (
  val: IPointer.ValueType<InputIterator>,
) => IPointer.ValueType<OutputIterator>;

function _Initialize<
  InputIterator extends Readonly<
    IForwardIterator<IPointer.ValueType<InputIterator>, InputIterator>
  >,
  OutputIterator extends Writeonly<
    IForwardIterator<IPointer.ValueType<OutputIterator>, OutputIterator>
  >,
>(
  first: InputIterator,
  output: OutputIterator,
  init?: IPointer.ValueType<InputIterator>,
): [InputIterator, OutputIterator, IPointer.ValueType<OutputIterator>] {
  return _Transform_initialize(first, output, (val) => <any>val, init);
}

function _Transform_initialize<
  InputIterator extends Readonly<
    IForwardIterator<IPointer.ValueType<InputIterator>, InputIterator>
  >,
  OutputIterator extends Writeonly<
    IForwardIterator<IPointer.ValueType<OutputIterator>, OutputIterator>
  >,
>(
  first: InputIterator,
  output: OutputIterator,
  unary: Transformer<InputIterator, OutputIterator>,
  init?: IPointer.ValueType<InputIterator>,
): [InputIterator, OutputIterator, IPointer.ValueType<OutputIterator>] {
  // WRITE THE FIRST OR INITIAL VALUE
  const ret: IPointer.ValueType<OutputIterator> = unary(
    init === undefined ? first.value : init,
  );
  output.value = ret;

  // RETURNS WITH ADVANCES
  return [first.next(), output.next(), ret];
}
