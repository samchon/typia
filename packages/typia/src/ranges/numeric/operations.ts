//================================================================

/**
 * @packageDocumentation
 * @module std.ranges
 */
//================================================================
import { IPointer } from "../../functional/IPointer";
import { Writeonly } from "../../internal/functional/Writeonly";
import { IForwardIterator } from "../../iterator/IForwardIterator";
import { begin, end } from "../../iterator/factory";
import * as base from "../../numeric/operations";
import { minus, multiplies, plus } from "../../numeric/operators";
import { IForwardContainer } from "../container/IForwardContainer";

type UnaryTransformer<
  Range extends Array<any> | IForwardContainer<any>,
  OutputIterator extends IForwardIterator<
    IPointer.ValueType<OutputIterator>,
    OutputIterator
  >,
> = (
  val: IForwardContainer.ValueType<Range>,
) => IPointer.ValueType<OutputIterator>;

type BinaryTransformer<
  OutputIterator extends IForwardIterator<
    IPointer.ValueType<OutputIterator>,
    OutputIterator
  >,
> = (
  x: IPointer.ValueType<OutputIterator>,
  y: IPointer.ValueType<OutputIterator>,
) => IPointer.ValueType<OutputIterator>;

type Operator<
  Range1 extends Array<any> | IForwardContainer<any>,
  Range2 extends Array<any> | IForwardContainer<any> = Range1,
> = (
  x: IForwardContainer.ValueType<Range1>,
  y: IForwardContainer.ValueType<Range2>,
) => IForwardContainer.ValueType<Range1>;

/* ---------------------------------------------------------
    COMMON ALGORITHMS
--------------------------------------------------------- */
export function iota<
  Range extends Array<any> | IForwardContainer<IForwardIterator<number, any>>,
>(range: Range, value: number): void {
  return base.iota(<any>begin(range), end(range), value);
}

export function accumulate<Range extends Array<any> | IForwardContainer<any>>(
  range: Range,
  init: IForwardContainer.ValueType<Range>,
  op: Operator<Range> = <any>plus,
): IForwardContainer.ValueType<Range> {
  return base.accumulate(begin(range), end(range), init, op);
}

export function inner_product<
  Range1 extends Array<any> | IForwardContainer<any>,
  Range2 extends Array<any> | IForwardContainer<any>,
>(
  range1: Range1,
  range2: Range2,
  value: IForwardContainer.ValueType<Range1>,
  adder: Operator<Range1> = <any>plus,
  multiplier: Operator<Range1, Range2> = <any>multiplies,
): IForwardContainer.ValueType<Range1> {
  return base.inner_product(
    begin(range1),
    end(range1),
    begin(range2),
    value,
    adder,
    multiplier,
  );
}

export function adjacent_difference<
  Range extends Array<any> | IForwardContainer<any>,
  OutputIterator extends Writeonly<
    IForwardIterator<IForwardContainer.ValueType<Range>, OutputIterator>
  >,
>(
  range: Range,
  output: OutputIterator,
  subtracter: Operator<Range> = <any>minus,
): OutputIterator {
  return base.adjacent_difference(begin(range), end(range), output, subtracter);
}

export function partial_sum<
  Range extends Array<any> | IForwardContainer<any>,
  OutputIterator extends Writeonly<
    IForwardIterator<IForwardContainer.ValueType<Range>, OutputIterator>
  >,
>(
  range: Range,
  output: OutputIterator,
  adder: Operator<Range> = <any>plus,
): OutputIterator {
  return base.partial_sum(begin(range), end(range), output, adder);
}

/* ---------------------------------------------------------
    PREFIX SUMS
--------------------------------------------------------- */
export function inclusive_scan<
  Range extends Array<any> | IForwardContainer<any>,
  OutputIterator extends Writeonly<
    IForwardIterator<IForwardContainer.ValueType<Range>, OutputIterator>
  >,
>(
  range: Range,
  output: OutputIterator,
  adder: Operator<Range> = <any>plus,
  init?: IForwardContainer.ValueType<Range>,
): OutputIterator {
  return base.inclusive_scan(begin(range), end(range), output, adder, init);
}

export function exclusive_scan<
  Range extends Array<any> | IForwardContainer<any>,
  OutputIterator extends Writeonly<
    IForwardIterator<IForwardContainer.ValueType<Range>, OutputIterator>
  >,
>(
  range: Range,
  output: OutputIterator,
  init: IForwardContainer.ValueType<Range>,
  adder: Operator<Range> = <any>plus,
): OutputIterator {
  return base.exclusive_scan(begin(range), end(range), output, init, adder);
}

export function transform_inclusive_scan<
  Range extends Array<any> | IForwardContainer<any>,
  OutputIterator extends IForwardIterator<
    IPointer.ValueType<OutputIterator>,
    OutputIterator
  >,
>(
  range: Range,
  output: OutputIterator,
  binary: BinaryTransformer<OutputIterator>,
  unary: UnaryTransformer<Range, OutputIterator>,
  init?: IForwardContainer.ValueType<Range>,
): OutputIterator {
  return base.transform_inclusive_scan(
    begin(range),
    end(range),
    output,
    binary,
    unary,
    init,
  );
}

export function transform_exclusive_scan<
  Range extends Array<any> | IForwardContainer<any>,
  OutputIterator extends IForwardIterator<
    IPointer.ValueType<OutputIterator>,
    OutputIterator
  >,
>(
  range: Range,
  output: OutputIterator,
  init: IForwardContainer.ValueType<Range>,
  binary: BinaryTransformer<OutputIterator>,
  unary: UnaryTransformer<Range, OutputIterator>,
): OutputIterator {
  return base.transform_exclusive_scan(
    begin(range),
    end(range),
    output,
    init,
    binary,
    unary,
  );
}
