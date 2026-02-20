/**
 * Atomic (primitive) type utilities for typia's type system.
 */
export namespace Atomic {
  /** Union of JavaScript primitive value types. */
  export type Type = boolean | number | string | bigint;

  /** String literal names for atomic types. */
  export type Literal = "boolean" | "integer" | "number" | "string" | "bigint";

  /** Maps literal type names to their corresponding value types. */
  export type Mapper = {
    boolean: boolean;
    integer: number;
    number: number;
    string: string;
    bigint: bigint;
  };
}
