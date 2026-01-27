//================================================================

/**
 * @packageDocumentation
 * @module std.internal
 */
//================================================================
import { IPushFront } from "./IPushFront";

export interface IDeque<T> extends IPushFront<T> {
  /**
   * Erase the first element.
   */
  pop_front(): void;
}
