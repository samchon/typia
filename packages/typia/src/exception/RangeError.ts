//================================================================

/**
 * @packageDocumentation
 * @module std
 */
//================================================================
import { RuntimeError } from "./RuntimeError";

/**
 * Range Error.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export class RangeError extends RuntimeError {
  /**
   * Initializer Constructor.
   *
   * @param message The error messgae.
   */
  public constructor(message: string) {
    super(message);
  }
}
