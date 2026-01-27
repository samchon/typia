//================================================================

/**
 * @packageDocumentation
 * @module std
 */
//================================================================
import { AdaptorContainer } from "../internal/container/linear/AdaptorContainer";
import { List } from "./List";

/**
 * Queue; FIFO (First In First Out).
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export class Queue<T> extends AdaptorContainer<T, List<T>, Queue<T>> {
  /* ---------------------------------------------------------
        CONSTRUCTORS
    --------------------------------------------------------- */
  /**
   * Default Constructor.
   */
  public constructor();

  /**
   * Copy Constructor.
   *
   * @param obj Object to copy.
   */
  public constructor(obj: Queue<T>);

  public constructor(obj?: Queue<T>) {
    super(new List());

    if (obj !== undefined)
      this.source_.assign(obj.source_.begin(), obj.source_.end());
  }

  /* ---------------------------------------------------------
        ACCESSORS
    --------------------------------------------------------- */
  /**
   * Get the first element.
   *
   * @return The first element.
   */
  public front(): T {
    return this.source_.front();
  }

  /**
   * Get the last element.
   *
   * @return The last element.
   */
  public back(): T {
    return this.source_.back();
  }

  /**
   * @inheritDoc
   */
  public pop(): void {
    this.source_.pop_front();
  }
}
