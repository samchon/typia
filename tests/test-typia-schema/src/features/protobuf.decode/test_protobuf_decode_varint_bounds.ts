import typia from "typia";

import { ProtobufVarintCorpus } from "./ProtobufVarintCorpus";

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
 * Every byte string and every verdict below comes from
 * `packages/typia/test/protobuf_varint_corpus.json`, which the Go test
 * `TestProtobufVarintCorpusMatchesProtowire` holds against
 * `google.golang.org/protobuf`. Nothing here is transcribed, so a decoder that
 * disagreed with the reference Go parser could not also agree with this file.
 *
 * 1. Cross all eight direct and factory wrappers with every malformed corpus
 *    row placed as a 32-bit, 64-bit, boolean, packed, map, and nested value.
 * 2. Reject the same rows as top-level and group tags, as bytes, string,
 *    packed, map, nested, unknown-field, and group-contained length prefixes,
 *    and as the value of an unknown varint field the decoder only skips.
 * 3. Preserve every accepted row's decoded value, trailing fields, and encoder
 *    round trips.
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

  //----
  // EVERY MALFORMED ROW, EVERY PLACEMENT
  //----
  // a valid message follows each malformed varint, so a decoder that rejected
  // the payload for running out of bytes rather than for the varint itself
  // would report a different fault here
  const malformed: ProtobufVarintCorpus.IEntry[] =
    ProtobufVarintCorpus.malformed();
  if (malformed.length === 0)
    throw new Error("the shared varint corpus carries no malformed row.");
  for (const entry of malformed) {
    const bytes: number[] = ProtobufVarintCorpus.bytes(entry);
    const expected: string = ProtobufVarintCorpus.message(entry);
    const label = (what: string): string => `${what} of ${entry.name}`;

    for (const field of VARINT_FIELDS)
      assertAll(
        label(`${field.name} scalar`),
        Uint8Array.from([field.tag, ...bytes, ...baseline]),
        expected,
      );

    assertAll(
      label("packed uint64 value"),
      Uint8Array.from([0x32, bytes.length, ...bytes, ...baseline]),
      expected,
    );
    assertAll(
      label("unpacked repeated uint64 value"),
      Uint8Array.from([0x30, ...bytes, ...baseline]),
      expected,
    );
    assertAll(
      label("map uint64 value"),
      Uint8Array.from([0x4a, bytes.length + 1, 0x10, ...bytes, ...baseline]),
      expected,
    );
    assertAll(
      label("map string key length"),
      Uint8Array.from([0x4a, bytes.length + 1, 0x0a, ...bytes, ...baseline]),
      expected,
    );
    assertAll(
      label("nested uint64 value"),
      Uint8Array.from([0x52, bytes.length + 1, 0x08, ...bytes, ...baseline]),
      expected,
    );
    assertAll(
      label("nested string length"),
      Uint8Array.from([0x52, bytes.length + 1, 0x12, ...bytes, ...baseline]),
      expected,
    );

    for (const [name, tag] of LENGTH_FIELDS)
      assertAll(
        label(`${name} length`),
        Uint8Array.from([tag, ...bytes, ...baseline]),
        expected,
      );
    assertAll(
      label("unknown field length"),
      Uint8Array.from([0x6a, ...bytes, ...baseline]),
      expected,
    );
    // the skip path discards the bytes it reads, so it is the one consumer
    // that could accept a varint no value reader would; #2139 pinned only its
    // over-long half, and the tenth-byte payload half arrives with this fix
    assertAll(
      label("unknown varint field"),
      Uint8Array.from([0x68, ...bytes, ...baseline]),
      expected,
    );
    assertAll(
      label("length inside a group"),
      Uint8Array.from([0x6b, 0x72, ...bytes, 0x6c, ...baseline]),
      expected,
    );

    const tag: number[] = ProtobufVarintCorpus.asTag(entry);
    assertAll(
      label("top-level field tag"),
      Uint8Array.from([...tag, 0x01, ...baseline]),
      expected,
    );
    assertAll(
      label("field tag inside a group"),
      Uint8Array.from([0x6b, ...tag, 0x01, 0x6c, ...baseline]),
      expected,
    );
  }

  //----
  // EVERY TRUNCATED ROW
  //----
  // nothing follows a truncated varint, so the payload really does end inside
  // it and the decoder must report the framing fault rather than a value
  for (const entry of ProtobufVarintCorpus.truncated()) {
    const bytes: number[] = ProtobufVarintCorpus.bytes(entry);
    const expected: string = ProtobufVarintCorpus.message(entry);
    assertAll(
      `scalar ${entry.name}`,
      Uint8Array.from([0x08, ...bytes]),
      expected,
    );
    assertAll(
      `length ${entry.name}`,
      Uint8Array.from([0x3a, ...bytes]),
      expected,
    );
    if (bytes.length !== 0)
      assertAll(
        `tag ${entry.name}`,
        Uint8Array.from(ProtobufVarintCorpus.asTag(entry)),
        expected,
      );
  }

  //----
  // EVERY ACCEPTED ROW STILL DECODES
  //----
  for (const [label, decode] of DECODERS) {
    for (const entry of ProtobufVarintCorpus.accepted()) {
      const decoded: typia.Resolved<ISurface> = decode(
        Uint8Array.from([
          ...baseline,
          0x18,
          ...ProtobufVarintCorpus.bytes(entry),
        ]),
      );
      const expected: bigint = ProtobufVarintCorpus.value(entry);
      if (decoded.uint64 !== expected)
        throw new Error(
          `${label} decoded ${entry.name} as ${decoded.uint64} instead of ${expected}.`,
        );
    }

    // a trailing field behind an accepted varint is still read
    const trailing: typia.Resolved<ISurface> = decode(
      Uint8Array.from([
        ...baseline,
        0x08,
        ...ProtobufVarintCorpus.bytes(
          ProtobufVarintCorpus.find("non-canonical ten-byte zero"),
        ),
        0x28,
        0x01,
      ]),
    );
    if (trailing.uint32 !== 0 || trailing.boolean !== true)
      throw new Error(
        `${label} lost a valid non-canonical value or trailing field.`,
      );

    const maximum: typia.Resolved<ISurface> = decode(
      Uint8Array.from([
        ...baseline,
        0x18,
        ...ProtobufVarintCorpus.bytes(
          ProtobufVarintCorpus.find("canonical 64-bit maximum"),
        ),
      ]),
    );
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
