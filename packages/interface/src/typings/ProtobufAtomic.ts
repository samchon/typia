/**
 * Protocol Buffers atomic (scalar) type names.
 *
 * Union of all primitive type identifiers used in Protocol Buffers wire format
 * encoding/decoding.
 *
 * @author Jeongho Nam - https://github.com/samchon
 *
 * @evidence contracts/common.md#principled-implementation A closed string-literal union names exactly the scalar kinds typia's protobuf programmers emit (bool, 32 and 64 bit integers, float, double, string); a union of literals is the direct representation of a finite discriminator set.
 * @evidence contracts/common.md#clear-and-simple-design The alias and the same-named namespace of narrower subsets are the only members; subsets are sub-unions of the main union so callers do not repeat literals.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts It lists wire-level categories from the Protocol Buffers scalar vocabulary rather than any consumer's message, and performs no runtime check.
 * @evidence contracts/common.md#meaningful-documentation The comment says this is the set of scalar type identifiers used for encoding and decoding, and the namespace comments describe the numeric and 64-bit subsets.
 */
export type ProtobufAtomic =
  | "bool"
  | "int32"
  | "uint32"
  | "int64"
  | "uint64"
  | "float"
  | "double"
  | "string";
export namespace ProtobufAtomic {
  /**
   * Numeric protobuf types (integers and floats).
   *
   * @evidence contracts/common.md#principled-implementation Numeric is the union minus bool and string, so each member is a protobuf integer or floating scalar; it is a subset of ProtobufAtomic by construction of the literals.
   * @evidence contracts/common.md#clear-and-simple-design A literal sub-union is the simplest way to name the subset without a conditional type over the main alias.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A static literal set, not a runtime classification or cast.
   * @evidence contracts/common.md#meaningful-documentation The one-line comment states which kinds count as numeric.
   */
  export type Numeric =
    | "int32"
    | "uint32"
    | "int64"
    | "uint64"
    | "float"
    | "double";

  /**
   * 64-bit integer types that map to JavaScript `bigint`.
   *
   * @evidence contracts/common.md#principled-implementation int64 and uint64 are the protobuf scalars whose range exceeds a JavaScript safe integer, so they are the ones that map to `bigint`; the two literals state this fixed contract.
   * @evidence contracts/common.md#clear-and-simple-design A two-member literal union; no other 64-bit scalar variant exists in the supported set.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A static literal set, with no runtime conversion or cast.
   * @evidence contracts/common.md#meaningful-documentation The comment states the bigint mapping that justifies the subset.
   */
  export type BigNumeric = "int64" | "uint64";
}
