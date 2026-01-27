//================================================================

/**
 * @packageDocumentation
 * @module std.ranges
 */
//================================================================
import { Vector } from "../../container/Vector";
import { IPointer } from "../../functional/IPointer";
import { IReversableIterator } from "../../iterator/IReversableIterator";
import { IReverseIterator } from "../../iterator/IReverseIterator";
import { IForwardContainer } from "./IForwardContainer";

/**
 * Bidirection iterable container.
 *
 * @template Iterator Iterator type
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IBidirectionalContainer<
  IteratorT extends IReversableIterator<
    IPointer.ValueType<IteratorT>,
    IteratorT,
    ReverseIteratorT
  >,
  ReverseIteratorT extends IReverseIterator<
    IPointer.ValueType<IteratorT>,
    IteratorT,
    ReverseIteratorT
  >,
> extends IForwardContainer<IteratorT> {
  /**
   * Reverse iterator to the first element in reverse.
   *
   * @return Reverse iterator to the first.
   */
  rbegin(): ReverseIteratorT;

  /**
   * Reverse iterator to the reverse end.
   *
   * @return Reverse iterator to the end.
   */
  rend(): ReverseIteratorT;
}

export namespace IBidirectionalContainer {
  /**
   * Deduct iterator type.
   */
  export type IteratorType<
    Container extends Array<any> | IBidirectionalContainer<any, any>,
  > = Container extends Array<infer T>
    ? Vector.Iterator<T>
    : Container extends IBidirectionalContainer<infer Iterator, any>
    ? Iterator
    : unknown;

  /**
   * Deduct reverse iterator type.
   */
  export type ReverseIteratorType<
    Container extends Array<any> | IBidirectionalContainer<any, any>,
  > = Container extends Array<infer T>
    ? Vector.ReverseIterator<T>
    : Container extends IBidirectionalContainer<any, infer ReverseIterator>
    ? ReverseIterator
    : unknown;

  /**
   * Deduct value type.
   */
  export type ValueType<
    Container extends Array<any> | IBidirectionalContainer<any, any>,
  > = IPointer.ValueType<IteratorType<Container>>;
}
