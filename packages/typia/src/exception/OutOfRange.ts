//================================================================

/**
 * @packageDocumentation
 * @module std
 */
//================================================================
import { LogicError } from "./LogicError";

/**
 * Out-of-range Exception.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export class OutOfRange extends LogicError {
  /**
   * Initializer Constructor.
   *
   * @param message The error messgae.
   */
  public constructor(message: string) {
    super(message);
  }
}
