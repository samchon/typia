import typia from "typia";

/**
 * Verifies generated Protobuf decoders reject malformed varints before
 * validation.
 *
 * The generated decoder shares `uint32` between scalar values, field tags, and
 * every length-delimited frame, while all 64-bit scalar projections share the
 * corresponding wide reader. Every raw, assertion, predicate, and validation
 * wrapper must therefore surface the same wire error instead of returning a
 * product-shaped value, `null`, or an `IValidation` result.
 *
 * 1. Cross all eight direct and factory wrappers with malformed 32-bit, 64-bit,
 *    boolean, packed, map, and nested values.
 * 2. Reject malformed top-level and group tags plus bytes, string, packed, map,
 *    nested, unknown-field, and group-contained length prefixes.
 * 3. Preserve truncation errors, canonical maxima, non-canonical in-range
 *    encodings, trailing fields, and encoder round trips.
 */
export const test_protobuf_decode_varint_bounds = (): void => {
  const baseline: Uint8Array = typia.protobuf.encode<ISurface>({
    uint32: 1,
    int32: -1,
    uint64: 1n,
    int64: -1n,
    boolean: false,
    packed: [1n],
    bytes: Uint8Array.of(1),
    string: "x",
    records: { key: 1n },
    nested: { value: 1n, text: "x" },
    state: State.ONE,
    strings: ["x"],
  });

  for (const malformed of [NO_TERMINATOR, EXCESS_TENTH]) {
    for (const field of VARINT_FIELDS)
      assertAll(
        `${field.name} scalar`,
        Uint8Array.from([field.tag, ...malformed, ...baseline]),
        OVERLONG,
      );

    assertAll(
      "packed uint64 value",
      Uint8Array.from([0x32, malformed.length, ...malformed, ...baseline]),
      OVERLONG,
    );
    assertAll(
      "unpacked repeated uint64 value",
      Uint8Array.from([0x30, ...malformed, ...baseline]),
      OVERLONG,
    );
    assertAll(
      "map uint64 value",
      Uint8Array.from([
        0x4a,
        malformed.length + 1,
        0x10,
        ...malformed,
        ...baseline,
      ]),
      OVERLONG,
    );
    assertAll(
      "map string key length",
      Uint8Array.from([
        0x4a,
        malformed.length + 1,
        0x0a,
        ...malformed,
        ...baseline,
      ]),
      OVERLONG,
    );
    assertAll(
      "nested uint64 value",
      Uint8Array.from([
        0x52,
        malformed.length + 1,
        0x08,
        ...malformed,
        ...baseline,
      ]),
      OVERLONG,
    );
    assertAll(
      "nested string length",
      Uint8Array.from([
        0x52,
        malformed.length + 1,
        0x12,
        ...malformed,
        ...baseline,
      ]),
      OVERLONG,
    );

    for (const [name, tag] of LENGTH_FIELDS)
      assertAll(
        `${name} length`,
        Uint8Array.from([tag, ...malformed, ...baseline]),
        OVERLONG,
      );
    assertAll(
      "unknown field length",
      Uint8Array.from([0x6a, ...malformed, ...baseline]),
      OVERLONG,
    );
    assertAll(
      "length inside a group",
      Uint8Array.from([0x6b, 0x72, ...malformed, 0x6c, ...baseline]),
      OVERLONG,
    );

    const malformedTag: readonly number[] = [0x88, ...malformed.slice(1)];
    assertAll(
      "top-level field tag",
      Uint8Array.from([...malformedTag, 0x01, ...baseline]),
      OVERLONG,
    );
    assertAll(
      "field tag inside a group",
      Uint8Array.from([0x6b, ...malformedTag, 0x01, 0x6c, ...baseline]),
      OVERLONG,
    );
  }

  for (let count: number = 1; count < 10; ++count) {
    assertAll(
      `scalar truncated after ${count} byte${count === 1 ? "" : "s"}`,
      Uint8Array.from([0x08, ...continuations(count)]),
      OVERFLOW,
    );
    assertAll(
      `length truncated after ${count} byte${count === 1 ? "" : "s"}`,
      Uint8Array.from([0x3a, ...continuations(count)]),
      OVERFLOW,
    );
    assertAll(
      `tag truncated after ${count} byte${count === 1 ? "" : "s"}`,
      Uint8Array.from([0x88, ...continuations(count - 1)]),
      OVERFLOW,
    );
  }

  for (const [label, decode] of DECODERS) {
    const nonCanonical: typia.Resolved<ISurface> = decode(
      Uint8Array.from([
        ...baseline,
        0x08,
        ...continuations(9),
        0x00,
        0x28,
        0x01,
      ]),
    );
    if (nonCanonical.uint32 !== 0 || nonCanonical.boolean !== true)
      throw new Error(
        `${label} lost a valid non-canonical value or trailing field.`,
      );

    const maximum: typia.Resolved<ISurface> = decode(
      Uint8Array.from([...baseline, 0x18, ...UINT64_MAX]),
    );
    if (maximum.uint64 !== (1n << 64n) - 1n)
      throw new Error(`${label} decoded uint64 maximum as ${maximum.uint64}.`);

    const roundTrip: typia.Resolved<ISurface> = decode(
      typia.protobuf.encode<ISurface>(maximum as ISurface),
    );
    if (roundTrip.uint64 !== maximum.uint64 || roundTrip.records.key !== 1n)
      throw new Error(`${label} broke a valid encoder round trip.`);
  }
};

interface ISurface {
  uint32: number & typia.tags.Type<"uint32">;
  int32: number & typia.tags.Type<"int32">;
  uint64: bigint & typia.tags.Type<"uint64">;
  int64: bigint & typia.tags.Type<"int64">;
  boolean: boolean;
  packed: Array<bigint & typia.tags.Type<"uint64">>;
  bytes: Uint8Array;
  string: string;
  records: Record<string, bigint & typia.tags.Type<"uint64">>;
  nested: {
    value: bigint & typia.tags.Type<"uint64">;
    text: string;
  };
  state: State;
  strings: string[];
}

enum State {
  ZERO,
  ONE,
}

type Decoder = (input: Uint8Array) => typia.Resolved<ISurface>;

const must = (
  label: string,
  value: typia.Resolved<ISurface> | null,
): typia.Resolved<ISurface> => {
  if (value === null) throw new Error(`${label} rejected a valid payload.`);
  return value;
};

const unwrap = (
  label: string,
  validation: typia.IValidation<typia.Resolved<ISurface>>,
): typia.Resolved<ISurface> => {
  if (validation.success === false)
    throw new Error(`${label} rejected a valid payload.`);
  return validation.data;
};

const DECODERS: ReadonlyArray<readonly [string, Decoder]> = [
  ["decode", (input) => typia.protobuf.decode<ISurface>(input)],
  ["createDecode", typia.protobuf.createDecode<ISurface>()],
  ["assertDecode", (input) => typia.protobuf.assertDecode<ISurface>(input)],
  ["createAssertDecode", typia.protobuf.createAssertDecode<ISurface>()],
  [
    "isDecode",
    (input) => must("isDecode", typia.protobuf.isDecode<ISurface>(input)),
  ],
  [
    "createIsDecode",
    (
      (decode) => (input: Uint8Array) =>
        must("createIsDecode", decode(input))
    )(typia.protobuf.createIsDecode<ISurface>()),
  ],
  [
    "validateDecode",
    (input) =>
      unwrap("validateDecode", typia.protobuf.validateDecode<ISurface>(input)),
  ],
  [
    "createValidateDecode",
    (
      (decode) => (input: Uint8Array) =>
        unwrap("createValidateDecode", decode(input))
    )(typia.protobuf.createValidateDecode<ISurface>()),
  ],
];

const assertAll = (
  label: string,
  input: Uint8Array,
  expected: string,
): void => {
  for (const [decoder, decode] of DECODERS) {
    try {
      decode(input);
    } catch (error) {
      if (error instanceof Error && error.message === expected) continue;
      throw new Error(
        `${decoder} ${label} reported ${String(error)} instead of ${JSON.stringify(expected)}.`,
      );
    }
    throw new Error(`${decoder} accepted ${label}.`);
  }
};

const continuations = (count: number): number[] =>
  new Array(count).fill(0x80) as number[];

const NO_TERMINATOR = continuations(10);
const EXCESS_TENTH = [...continuations(9), 0x02] as const;
const UINT64_MAX = [
  0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0x01,
] as const;
const VARINT_FIELDS = [
  { name: "uint32", tag: 0x08 },
  { name: "int32", tag: 0x10 },
  { name: "uint64", tag: 0x18 },
  { name: "int64", tag: 0x20 },
  { name: "boolean", tag: 0x28 },
  { name: "enum-like value", tag: 0x58 },
] as const;
const LENGTH_FIELDS = [
  ["packed", 0x32],
  ["bytes", 0x3a],
  ["string", 0x42],
  ["map", 0x4a],
  ["nested", 0x52],
  ["repeated string", 0x62],
] as const;
const PREFIX = "Error on typia.protobuf.decode(): ";
const OVERFLOW = `${PREFIX}buffer overflow.`;
const OVERLONG = `${PREFIX}varint exceeds 10 bytes.`;
