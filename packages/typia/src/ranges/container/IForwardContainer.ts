//================================================================

/**
 * @packageDocumentation
 * @module std.ranges
 */
//================================================================
import { Vector } from "../../container/Vector";
import { IPointer } from "../../functional/IPointer";
import { ISize } from "../../internal/container/partial/ISize";
import { IForwardIterator } from "../../iterator/IForwardIterator";

/**
 * Forward iterable container.
 *
 * @template Iterator Iterator type
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IForwardContainer<
  Iterator extends IForwardIterator<IPointer.ValueType<Iterator>, Iterator>,
> extends ISize {
  /**
   * Iterator to the first element.
   *
   * @return Iterator to the first element.
   */
  begin(): Iterator;

  /**
   * Iterator to the end.
   *
   * @return Iterator to the end.
   */
  end(): Iterator;
}

export namespace IForwardContainer {
  /**
   * Deduct iterator type.
   */
  export type IteratorType<
    Container extends Array<any> | IForwardContainer<any>,
  > = Container extends Array<infer T>
    ? Vector.Iterator<T>
    : Container extends IForwardContainer<infer Iterator>
    ? Iterator
    : unknown;

  /**
   * Deduct value type.
   */
  export type ValueType<Container extends Array<any> | IForwardContainer<any>> =
    IPointer.ValueType<IteratorType<Container>>;

  /**
   * Deduct similar type.
   */
  export type SimilarType<
    Container extends Array<any> | IForwardContainer<any>,
  > =
    | Array<ValueType<Container>>
    | IForwardContainer<IForwardIterator<ValueType<Container>, any>>;
}
