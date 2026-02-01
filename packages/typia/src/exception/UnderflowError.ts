//================================================================

/**
 * @packageDocumentation
 * @module std
 */
//================================================================
import { RuntimeError } from "./RuntimeError";

/**
 * Underflow Error.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export class UnderflowError extends RuntimeError {
  /**
   * Initializer Constructor.
   *
   * @param message The error messgae.
   */
  public constructor(message: string) {
    super(message);
  }
}
