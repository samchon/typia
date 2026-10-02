/**
 * Atomic (primitive) type utilities for typia's type system.
 *
 * These describe typia's boolean, numeric, string and bigint categories rather
 * than every JavaScript primitive. Null, undefined and symbols are separate
 * metadata concerns. An integer literal category still maps to number because
 * TypeScript has no distinct integer value type.
 *
 * @author Jeongho Nam - https://github.com/samchon
 *
 * @evidence contracts/common.md#principled-implementation The namespace pairs typia's atomic value categories with their literal metadata names and type mapping; integer retains number representation while remaining a distinct metadata discriminator.
 * @evidence contracts/common.md#clear-and-simple-design The value union, name union and mapping have separate roles under one namespace, so callers can name each representation without an instance or runtime registry.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The declared category set belongs to typia's type model; it does not cast runtime values or claim TypeScript enforces integer precision or bounds.
 * @evidence contracts/common.md#meaningful-documentation Native prose defines the category boundary and integer-versus-number distinction, and each exported alias or mapping documents the representation it supplies.
 */
export namespace Atomic {
  /**
   * Value types represented by typia's atomic categories.
   *
   * Null, undefined and symbols are intentionally outside this union.
   *
   * @evidence contracts/common.md#principled-implementation The union admits the four TypeScript value domains represented by typia's atomic model; integer values share number rather than a fictitious separate primitive.
   * @evidence contracts/common.md#clear-and-simple-design A direct union exposes value membership with no conditional mapping or runtime dependency.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts This is a static category union, not a runtime validator or a cast that accepts unrelated value kinds.
   * @evidence contracts/common.md#meaningful-documentation The alias comment names its typia-specific scope and expressly distinguishes excluded JavaScript primitive kinds.
   */
  export type Type = boolean | number | string | bigint;

  /**
   * Metadata category names, including the distinct integer discriminator.
   *
   * @evidence contracts/common.md#principled-implementation Literal strings form a closed discriminator domain matching the atomic mapping keys; integer and number remain distinguishable as metadata despite sharing a value type.
   * @evidence contracts/common.md#clear-and-simple-design The direct literal union lets consumers represent category identity without depending on a runtime enumeration.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The names are model discriminants rather than consumer-specific accepted strings or runtime validation substitutes.
   * @evidence contracts/common.md#meaningful-documentation Native prose explains why the integer name exists independently from the numeric value representation.
   */
  export type Literal = "boolean" | "integer" | "number" | "string" | "bigint";

  /**
   * Value representation for each atomic metadata category.
   *
   * @evidence contracts/common.md#principled-implementation Each literal category indexes its corresponding TypeScript value type; both integer and number map to number because integer restrictions are metadata constraints rather than a separate primitive type.
   * @evidence contracts/common.md#clear-and-simple-design An explicit object mapping supports indexed type lookup and keeps the five category-to-value relationships visible in one declaration.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The mapping defines static representations and introduces no runtime coercion or assertion that all number values satisfy integer restrictions.
   * @evidence contracts/common.md#meaningful-documentation The mapping comment states its representation role; member comments distinguish integer restrictions from unrestricted numeric representation and identify the other category domains.
   */
  export type Mapper = {
    /** Boolean category values. */
    boolean: boolean;

    /** Number representation; integer restrictions are carried by metadata. */
    integer: number;

    /** Numeric category values without an integer restriction from this alias. */
    number: number;

    /** String category values. */
    string: string;

    /** Arbitrary-precision integer category values. */
    bigint: bigint;
  };
}
