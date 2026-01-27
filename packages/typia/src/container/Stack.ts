//================================================================

/**
 * @packageDocumentation
 * @module std
 */
//================================================================
import { AdaptorContainer } from "../internal/container/linear/AdaptorContainer";
import { Vector } from "./Vector";

/**
 * Stack; LIFO (Last In First Out).
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export class Stack<T> extends AdaptorContainer<T, Vector<T>, Stack<T>> {
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
  public constructor(obj: Stack<T>);

  public constructor(obj?: Stack<T>) {
    super(new Vector());

    if (obj !== undefined)
      this.source_.assign(obj.source_.begin(), obj.source_.end());
  }

  /* ---------------------------------------------------------
        ACCESSOR
    --------------------------------------------------------- */
  /**
   * Get the last element.
   *
   * @return The last element.
   */
  public top(): T {
    return this.source_.back();
  }

  /**
   * @inheritDoc
   */
  public pop(): void {
    this.source_.pop_back();
  }
}
