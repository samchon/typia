//================================================================

/**
 * @packageDocumentation
 * @module std.internal
 */
//================================================================
import { IArrayContainer } from "../../base/container/IArrayContainer";
import { ArrayContainer } from "../container/linear/ArrayContainer";
import { ArrayIterator } from "./ArrayIterator";
import { ArrayReverseIteratorBase } from "./ArrayReverseIteratorBase";

export class ArrayReverseIterator<
    T,
    SourceT extends ArrayContainer<
      T,
      SourceT,
      SourceT,
      ArrayIterator<T, SourceT>,
      ArrayReverseIterator<T, SourceT>,
      T
    >,
  >
  extends ArrayReverseIteratorBase<
    T,
    SourceT,
    SourceT,
    ArrayIterator<T, SourceT>,
    ArrayReverseIterator<T, SourceT>,
    T
  >
  implements
    IArrayContainer.ReverseIterator<
      T,
      SourceT,
      ArrayIterator<T, SourceT>,
      ArrayReverseIterator<T, SourceT>
    >
{
  protected _Create_neighbor(
    base: ArrayIterator<T, SourceT>,
  ): ArrayReverseIterator<T, SourceT> {
    return new ArrayReverseIterator(base);
  }
}
