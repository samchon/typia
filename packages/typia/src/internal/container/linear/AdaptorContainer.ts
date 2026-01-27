//================================================================

/**
 * @packageDocumentation
 * @module std.internal
 */
//================================================================
import { IEmpty } from "../partial/IEmpty";
import { IPush } from "../partial/IPush";
import { ISize } from "../partial/ISize";

/**
 * Base class for Adaptor Containers.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export abstract class AdaptorContainer<
  T,
  Source extends IEmpty & ISize & IPush<T>,
  This extends AdaptorContainer<T, Source, This>,
> implements IEmpty, ISize, IPush<T>
{
  protected source_: Source;

  protected constructor(source: Source) {
    this.source_ = source;
  }

  /* ---------------------------------------------------------
        ACCESSORS
    --------------------------------------------------------- */
  /**
   * @inheritDoc
   */
  public size(): number {
    return this.source_.size();
  }

  /**
   * @inheritDoc
   */
  public empty(): boolean {
    return this.source_.empty();
  }

  /* ---------------------------------------------------------
        ELEMENTS I/O
    --------------------------------------------------------- */
  /**
   * @inheritDoc
   */
  public push(...elems: T[]): number {
    return this.source_.push(...elems);
  }

  /**
   * Remove element.
   */
  public abstract pop(): void;

  /**
   * Swap elements.
   *
   * @param obj Target container to swap.
   */
  public swap(obj: This): void {
    [this.source_, obj.source_] = [obj.source_, this.source_];
  }
}
