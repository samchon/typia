//================================================================

/**
 * @packageDocumentation
 * @module std
 */
//================================================================
import { Exception } from "./Exception";

/**
 * Logic Error.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export class LogicError extends Exception {
  /**
   * Initializer Constructor.
   *
   * @param message The error messgae.
   */
  public constructor(message: string) {
    super(message);
  }
}
