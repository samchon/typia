//================================================================

/**
 * @packageDocumentation
 * @module std
 */
//================================================================
import { ErrorCategory } from "./ErrorCategory";
import { ErrorCode } from "./ErrorCode";
import { RuntimeError } from "./RuntimeError";

/**
 * System Error.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export class SystemError extends RuntimeError {
  protected code_: ErrorCode;

  /* ---------------------------------------------------------
        CONSTRUCTORS
    --------------------------------------------------------- */
  /**
   * Initializer Constructor.
   *
   * @param code An error code.
   * @param message A detailed error message.
   */
  public constructor(code: ErrorCode, message?: string);

  /**
   * Construct from references.
   *
   * @param val Identnfier of an error code in *category*.
   * @param category An error category.
   * @param message A detailed error message.
   */
  public constructor(val: number, category: ErrorCategory, message?: string);

  public constructor(...args: any[]) {
    super("");

    if (args.length >= 2 && typeof args[0].valueOf() === "number") {
      const val: number = args[0];
      const category: ErrorCategory = args[1];

      this.code_ = new ErrorCode(val, category);
      this.message = args[2];
    } else {
      this.code_ = args[0];
      this.message = args[1];
    }
  }

  /* ---------------------------------------------------------
        ACCESSORS
    --------------------------------------------------------- */
  /**
   * Get error code.
   *
   * @return The error code.
   */
  public code(): ErrorCode {
    return this.code_;
  }

  /**
   * @inheritDoc
   */
  public toJSON(): object {
    return {
      ...super.toJSON(),
      code: this.code_.toJSON(),
    };
  }
}
