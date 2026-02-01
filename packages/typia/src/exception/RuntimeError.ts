//================================================================

/**
 * @packageDocumentation
 * @module std
 */
//================================================================
import { Exception } from "./Exception";

/**
 * Runtime Error.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export class RuntimeError extends Exception {
  /**
   * Initializer Constructor.
   *
   * @param message The error messgae.
   */
  public constructor(message: string) {
    super(message);
  }
}
