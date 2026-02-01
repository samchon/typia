//================================================================

/**
 * @packageDocumentation
 * @module std.internal
 */
//================================================================
import { IContainer } from "../../base/container/IContainer";
import { IRandomAccessIterator } from "../../iterator/IRandomAccessIterator";
import { ArrayContainer } from "../container/linear/ArrayContainer";
import { ArrayIteratorBase } from "./ArrayIteratorBase";
import { ReverseIterator } from "./ReverseIterator";

/**
 * Reverse iterator of Array Containers.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export abstract class ArrayReverseIteratorBase<
    T extends ElemT,
    SourceT extends IContainer<T, SourceT, IteratorT, ReverseT, ElemT>,
    ArrayT extends ArrayContainer<
      T,
      SourceT,
      ArrayT,
      IteratorT,
      ReverseT,
      ElemT
    >,
    IteratorT extends ArrayIteratorBase<
      T,
      SourceT,
      ArrayT,
      IteratorT,
      ReverseT,
      ElemT
    >,
    ReverseT extends ArrayReverseIteratorBase<
      T,
      SourceT,
      ArrayT,
      IteratorT,
      ReverseT,
      ElemT
    >,
    ElemT,
  >
  extends ReverseIterator<T, SourceT, IteratorT, ReverseT, ElemT>
  implements IRandomAccessIterator<T, ReverseT>
{
  /* ---------------------------------------------------------
        CONSTRUCTORS
    --------------------------------------------------------- */
  /**
   * @inheritDoc
   */
  public advance(n: number): ReverseT {
    return this._Create_neighbor(this.base().advance(-n));
  }

  /* ---------------------------------------------------------
        ACCESSORS
    --------------------------------------------------------- */
  /**
   * @inheritDoc
   */
  public index(): number {
    return this.base_.index();
  }

  /**
   * @inheritDoc
   */
  public get value(): T {
    return this.base_.value;
  }

  /**
   * @inheritDoc
   */
  public set value(val: T) {
    this.base_.value = val;
  }
}
