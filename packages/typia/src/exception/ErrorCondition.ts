//================================================================

/**
 * @packageDocumentation
 * @module std
 */
//================================================================
import { ErrorInstance } from "../internal/exception/ErrorInstance";
import { ErrorCategory } from "./ErrorCategory";

/**
 * Error condition.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export class ErrorCondition extends ErrorInstance {
  /**
   * Default Constructor.
   */
  public constructor();

  /**
   * Initializer Constructor.
   *
   * @param val Identifier of an error condition.
   * @param category An error category instance.
   */
  public constructor(val: number, category: ErrorCategory);

  public constructor(val: number = 0, category: ErrorCategory | null = null) {
    super(val, category!);
  }
}
