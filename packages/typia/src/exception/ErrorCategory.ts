//================================================================

/**
 * @packageDocumentation
 * @module std
 */
//================================================================
import { equal_to } from "../functional/comparators";
import { ErrorCode } from "./ErrorCode";
import { ErrorCondition } from "./ErrorCondition";

/**
 * Error category.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export abstract class ErrorCategory {
  /* ---------------------------------------------------------
        CONSTRUCTORS
    --------------------------------------------------------- */
  /**
   * Default Constructor.
   */
  public constructor() {}

  /* ---------------------------------------------------------
        ACCESSORS
    --------------------------------------------------------- */
  /**
   * Get category name.
   */
  public abstract name(): string;

  /**
   * Get error message.
   *
   * @param val Identifier of an error condition.
   * @return The error message.
   */
  public abstract message(val: number): string;

  /* ---------------------------------------------------------
        OPERATORS
    --------------------------------------------------------- */
  /**
   * Get default error condition.
   *
   * @param val Identifier of an error condition.
   * @return The error condition.
   */
  public default_error_condition(val: number): ErrorCondition {
    return new ErrorCondition(val, this);
  }

  /**
   * Test equivalence.
   *
   * @param val_code Identifier of an error code.
   * @param cond An error condition.
   * @return Whether equivalent or not.
   */
  public equivalent(val_code: number, cond: ErrorCondition): boolean;

  /**
   * Test equivalence.
   *
   * @param code An error code.
   * @param val_cond Identifier of an error condition.
   * @return Whether equivalent or not.
   */
  public equivalent(code: ErrorCode, val_cond: number): boolean;

  public equivalent(...args: any[]): boolean {
    if (args[1] instanceof ErrorCondition) {
      const val_code: number = args[0];
      const cond: ErrorCondition = args[1];

      return equal_to(this.default_error_condition(val_code), cond);
    } else {
      const code: ErrorCode = args[0];
      const valcond: number = args[1];

      return equal_to(this, code.category()) && code.value() === valcond;
    }
  }
}
