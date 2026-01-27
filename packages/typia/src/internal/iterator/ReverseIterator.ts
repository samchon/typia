//================================================================

/**
 * @packageDocumentation
 * @module std.base
 */
//================================================================
import { IContainer } from "../../base/container/IContainer";

/**
 * Basic reverse iterator.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export abstract class ReverseIterator<
  T extends PElem,
  Source extends IContainer<T, Source, Base, This, PElem>,
  Base extends IContainer.Iterator<T, Source, Base, This, PElem>,
  This extends ReverseIterator<T, Source, Base, This, PElem>,
  PElem = T,
> implements IContainer.ReverseIterator<T, Source, Base, This, PElem>
{
  protected base_: Base;

  /* ---------------------------------------------------------
        CONSTRUCTORS
    --------------------------------------------------------- */
  /**
   * Initializer Constructor.
   *
   * @param base The base iterator.
   */
  public constructor(base: Base) {
    this.base_ = base.prev();
  }

  // CREATE A NEW OBJECT WITH SAME (DERIVED) TYPE
  protected abstract _Create_neighbor(base: Base): This;

  /* ---------------------------------------------------------
        ACCESSORS
    --------------------------------------------------------- */
  /**
   * Get source container.
   *
   * @return The source container.
   */
  public source(): Source {
    return this.base_.source();
  }

  /**
   * @inheritDoc
   */
  public base(): Base {
    return this.base_.next();
  }

  /**
   * @inheritDoc
   */
  public get value(): T {
    return this.base_.value;
  }

  /* ---------------------------------------------------------
        MOVERS
    --------------------------------------------------------- */
  /**
   * @inheritDoc
   */
  public prev(): This {
    // this.base().next()
    return this._Create_neighbor(this.base().next());
  }

  /**
   * @inheritDoc
   */
  public next(): This {
    // this.base().prev()
    return this._Create_neighbor(this.base_);
  }

  /* ---------------------------------------------------------
        COMPARES
    --------------------------------------------------------- */
  /**
   * @inheritDoc
   */
  public equals(obj: This): boolean {
    return this.base_.equals(obj.base_);
  }
}
