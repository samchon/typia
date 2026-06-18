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
