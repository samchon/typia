import { ProtobufAtomic } from "@typia/interface";

/**
 * Verifies the `ProtobufAtomic` scalar union and its sub-unions.
 *
 * Pins the protobuf wire-scalar vocabulary: the full union, the `Numeric`
 * subset (integers + floats), and the `BigNumeric` subset (64-bit integers that
 * map to `bigint`). The subsets must be strict subtypes of the full union.
 *
 * 1. Compare the full union and each sub-union with their literals.
 * 2. Confirm `Numeric` and `BigNumeric` are assignable to `ProtobufAtomic`.
 * 3. Confirm `BigNumeric` is assignable to `Numeric`.
 *
 * @evidence contracts/testing.md#behavioral-verification ProtobufAtomic and its Numeric/BigNumeric subsets must equal the authored scalar-name unions and retain subset assignability.
 * @evidence contracts/testing.md#independent-expectations The documented supported protobuf scalar vocabulary supplies literals independently of the namespace; exact identity detects added or lost names.
 * @evidence contracts/testing.md#distinguishing-cases Bool/string versus integer/float numeric names, 32/64-bit families and the 64-bit-only BigNumeric subset distinguish each vocabulary boundary.
 * @evidence contracts/testing.md#execution-ownership test-interface start typechecks ProtobufAtomicCases through the installed TypeScript compiler (tsc) with noEmit. Each Assert requires a true result from the local symmetric type-identity or assignability check; value assignments and expect-error directives are also compile-only. No native artifact, consumer installation or runtime host executes this unit.
 */
export type ProtobufAtomicCases = [
  Assert<
    IsEqual<
      ProtobufAtomic,
      | "bool"
      | "int32"
      | "uint32"
      | "int64"
      | "uint64"
      | "float"
      | "double"
      | "string"
    >
  >,
  Assert<
    IsEqual<
      ProtobufAtomic.Numeric,
      "int32" | "uint32" | "int64" | "uint64" | "float" | "double"
    >
  >,
  Assert<IsEqual<ProtobufAtomic.BigNumeric, "int64" | "uint64">>,
  Assert<ProtobufAtomic.Numeric extends ProtobufAtomic ? true : false>,
  Assert<
    ProtobufAtomic.BigNumeric extends ProtobufAtomic.Numeric ? true : false
  >,
];

type Assert<T extends true> = T;

type IsEqual<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
    ? (<T>() => T extends Y ? 1 : 2) extends <T>() => T extends X ? 1 : 2
      ? true
      : false
    : false;
