import typia from "typia";

/**
 * Verifies generated decoders preserve official 64-bit varint vectors.
 *
 * The runtime reader is shared by scalar and packed generated paths and by
 * bigint and number projections. This pins all of those consumers across
 * direct, factory, and validating decoder entry points.
 *
 * 1. Frame canonical uint64 and int64 wire vectors as scalar and packed fields.
 * 2. Decode them through direct, factory, and validating public APIs.
 * 3. Assert every projection and the canonical encode-decode round trip.
 */
export const test_protobuf_decode_64bit_varints = (): void => {
  const input: Uint8Array = Uint8Array.from([
    0x08,
    ...UINT64_MAX,
    0x10,
    ...INT64_MIN,
    ...packed(0x1a, UINT64_VECTORS),
    ...packed(0x22, INT64_VECTORS),
    0x28,
    ...UINT64_HIGH_BIT,
    0x30,
    ...INT64_MIN,
  ]);
  const decode: (input: Uint8Array) => typia.Resolved<IBoundaries> =
    typia.protobuf.createDecode<IBoundaries>();
  const validate: (
    input: Uint8Array,
  ) => typia.IValidation<typia.Resolved<IBoundaries>> =
    typia.protobuf.createValidateDecode<IBoundaries>();

  const values: Array<typia.Resolved<IBoundaries>> = [
    typia.protobuf.decode<IBoundaries>(input),
    decode(input),
    unwrap(typia.protobuf.validateDecode<IBoundaries>(input)),
    unwrap(validate(input)),
  ];
  for (const value of values) assertBoundaries(value);

  const encoded: Uint8Array = typia.protobuf.encode<IBoundaries>(
    values[0] as IBoundaries,
  );
  if (
    encoded.length !== input.length ||
    encoded.some((byte, index) => byte !== input[index])
  )
    throw new Error("64-bit varint decode did not re-encode canonically.");
};

interface IBoundaries {
  uint64: bigint & typia.tags.Type<"uint64">;
  int64: bigint & typia.tags.Type<"int64">;
  uint64s: Array<bigint & typia.tags.Type<"uint64">>;
  int64s: Array<bigint & typia.tags.Type<"int64">>;
  uint64Number: number & typia.tags.Type<"uint64">;
  int64Number: number & typia.tags.Type<"int64">;
}

const assertBoundaries = (value: typia.Resolved<IBoundaries>): void => {
  if (value.uint64 !== (1n << 64n) - 1n)
    throw new Error(`uint64 scalar decoded as ${value.uint64}.`);
  if (value.int64 !== -(1n << 63n))
    throw new Error(`int64 scalar decoded as ${value.int64}.`);
  assertArray("uint64 packed", value.uint64s, UINT64_EXPECTED);
  assertArray("int64 packed", value.int64s, INT64_EXPECTED);
  if (value.uint64Number !== 2 ** 63)
    throw new Error(`uint64 number decoded as ${value.uint64Number}.`);
  if (value.int64Number !== -(2 ** 63))
    throw new Error(`int64 number decoded as ${value.int64Number}.`);
};

const assertArray = (
  label: string,
  actual: readonly bigint[],
  expected: readonly bigint[],
): void => {
  if (
    actual.length !== expected.length ||
    actual.some((value, index) => value !== expected[index])
  )
    throw new Error(`${label} decoded as [${actual.join(", ")}].`);
};

const unwrap = <T>(validation: typia.IValidation<T>): T => {
  if (validation.success === false)
    throw new Error(
      `valid varints were rejected: ${validation.errors.length}.`,
    );
  return validation.data;
};

const packed = (
  tag: number,
  vectors: readonly (readonly number[])[],
): readonly number[] => {
  const payload: number[] = vectors.flatMap((vector) => [...vector]);
  return [tag, payload.length, ...payload];
};

const UINT64_HIGH_BIT = [
  0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x01,
] as const;
const UINT64_MAX = [
  0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0x01,
] as const;
const INT64_MIN = UINT64_HIGH_BIT;

const UINT64_VECTORS = [
  [0x00],
  [0x80, 0x80, 0x80, 0x80, 0x08],
  [0x80, 0x80, 0x80, 0x80, 0x10],
  [0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x10],
  [0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0x7f],
  UINT64_HIGH_BIT,
  UINT64_MAX,
] as const;
const UINT64_EXPECTED = [
  0n,
  1n << 31n,
  1n << 32n,
  1n << 53n,
  (1n << 63n) - 1n,
  1n << 63n,
  (1n << 64n) - 1n,
] as const;

const INT64_VECTORS = [
  INT64_MIN,
  UINT64_MAX,
  [0x00],
  [0x01],
  [0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0x7f],
] as const;
const INT64_EXPECTED = [-(1n << 63n), -1n, 0n, 1n, (1n << 63n) - 1n] as const;
