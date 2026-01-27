//================================================================

/**
 * @packageDocumentation
 * @module std
 */
//================================================================
import { ErrorInstance } from "../internal/exception/ErrorInstance";
import { ErrorCategory } from "./ErrorCategory";
import { ErrorCondition } from "./ErrorCondition";

/**
 * Error code.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export class ErrorCode extends ErrorInstance {
  /**
   * Default Constructor.
   */
  public constructor();

  /**
   * Initializer Constructor.
   *
   * @param val Identifier of an error instance.
   * @param category An error category instance.
   */
  public constructor(val: number, category: ErrorCategory);

  public constructor(val: number = 0, category: ErrorCategory | null = null) {
    super(val, category!);
  }

  /**
   * Get default error condition.
   *
   * @return The default error condition object.
   */
  public default_error_condition(): ErrorCondition {
    return this.category_.default_error_condition(this.value_);
  }
}
