//================================================================

/**
 * @packageDocumentation
 * @module std.internal
 */
//================================================================
import { IForwardIterator } from "../../iterator/IForwardIterator";
import { Writeonly } from "../functional/Writeonly";

export abstract class InsertIteratorBase<
  T,
  This extends InsertIteratorBase<T, This>,
> implements Writeonly<IForwardIterator<T, This>>
{
  /**
   * Set value.
   *
   * @param val The value to set.
   */
  public abstract set value(val: T);

  /**
   * @inheritDoc
   */
  public next(): This {
    return this as any;
  }

  /**
   * @inheritDoc
   */
  public abstract equals(obj: This): boolean;
}
