//================================================================

/**
 * @packageDocumentation
 * @module std
 */
//================================================================
import { LogicError } from "./LogicError";

/**
 * Invalid Argument Exception.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export class InvalidArgument extends LogicError {
  /**
   * Initializer Constructor.
   *
   * @param message The error messgae.
   */
  public constructor(message: string) {
    super(message);
  }
}
