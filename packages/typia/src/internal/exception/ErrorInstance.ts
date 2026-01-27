//================================================================

/**
 * @packageDocumentation
 * @module std.internal
 */
//================================================================
import { ErrorCategory } from "../../exception/ErrorCategory";

/**
 * Base class for error instances.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export abstract class ErrorInstance {
  protected category_!: ErrorCategory;
  protected value_!: number;

  /* ---------------------------------------------------------
        CONSTRUCTORS
    --------------------------------------------------------- */
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
    this.assign(val, category!);
  }

  /**
   * Assign content.
   *
   * @param val Identifier of an error condition.
   * @param category An error category instance.
   */
  public assign(val: number, category: ErrorCategory): void {
    this.category_ = category;
    this.value_ = val;
  }

  /**
   * Clear content.
   */
  public clear(): void {
    this.value_ = 0;
  }

  /* ---------------------------------------------------------
        ACCESSORS
    --------------------------------------------------------- */
  /**
   * Get category.
   *
   * @return The category object.
   */
  public category(): ErrorCategory {
    return this.category_!;
  }

  /**
   * Get value, the identifier.
   *
   * @return The value, identifier of this object.
   */
  public value(): number {
    return this.value_;
  }

  /**
   * Get message.
   *
   * @return The message.
   */
  public message(): string {
    return this.category_!.message(this.value_);
  }

  /* ---------------------------------------------------------
        OPERATORS
    --------------------------------------------------------- */
  /**
   * Covert bo bool.
   *
   * @return Whether the {@link value} is not zero.
   */
  public to_bool(): boolean {
    return this.value_ !== 0;
  }

  public toJSON(): object {
    if (this.category_ === null) return {};
    else
      return {
        cateogory: this.category_.name(),
        value: this.value(),
        message: this.message(),
      };
  }
}
