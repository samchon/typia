//================================================================

/**
 * @packageDocumentation
 * @module std.ranges
 */
//================================================================
import { Vector } from "../../container/Vector";
import { IPointer } from "../../functional/IPointer";
import { IRandomAccessIterator } from "../../iterator/IRandomAccessIterator";
import { IForwardContainer } from "./IForwardContainer";

/**
 * Random-access iterable container.
 *
 * @template Iterator Iterator type
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IRandomAccessContainer<
  IteratorT extends IRandomAccessIterator<
    IPointer.ValueType<IteratorT>,
    IteratorT
  >,
> extends IForwardContainer<IteratorT> {}

export namespace IRandomAccessContainer {
  /**
   * Deduct iterator type.
   */
  export type IteratorType<
    Container extends Array<any> | IRandomAccessContainer<any>,
  > = Container extends Array<infer T>
    ? Vector.Iterator<T>
    : Container extends IRandomAccessContainer<infer Iterator>
    ? Iterator
    : unknown;

  /**
   * Deduct value type.
   */
  export type ValueType<
    Container extends Array<any> | IRandomAccessContainer<any>,
  > = IForwardContainer.ValueType<IteratorType<Container>>;
}
