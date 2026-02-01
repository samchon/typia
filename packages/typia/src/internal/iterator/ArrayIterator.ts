//================================================================

/**
 * @packageDocumentation
 * @module std.internal
 */
//================================================================
import { IArrayContainer } from "../../base/container/IArrayContainer";
import { ArrayContainer } from "../container/linear/ArrayContainer";
import { ArrayIteratorBase } from "./ArrayIteratorBase";
import { ArrayReverseIterator } from "./ArrayReverseIterator";

export class ArrayIterator<
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
  extends ArrayIteratorBase<
    T,
    SourceT,
    SourceT,
    ArrayIterator<T, SourceT>,
    ArrayReverseIterator<T, SourceT>,
    T
  >
  implements
    IArrayContainer.Iterator<
      T,
      SourceT,
      ArrayIterator<T, SourceT>,
      ArrayReverseIterator<T, SourceT>
    >
{
  /**
   * @inheritDoc
   */
  public reverse(): ArrayReverseIterator<T, SourceT> {
    return new ArrayReverseIterator(this);
  }

  /**
   * @inheritDoc
   */
  public source(): SourceT {
    return this._Get_array();
  }
}
