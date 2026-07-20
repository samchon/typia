import { ProtobufWire } from "@typia/interface";
import { _ProtobufReader } from "typia/lib/internal/_ProtobufReader";

import { ProtobufVarintCorpus } from "./ProtobufVarintCorpus";

/**
 * Verifies every runtime Protobuf varint reader matches the reference Go
 * parser over the shared corpus.
 *
 * A ten-byte varint has room for only one payload bit in its final byte. The
 * scalar readers, length readers, and unknown-field skipper must reject both a
 * continuing tenth byte and a terminating tenth byte with any higher payload
 * bit, instead of returning a truncated value or accepting a zero length.
 *
 * Rejecting is only half of it. The corpus also carries the canonical maximum
 * that terminates at each width from one byte through ten, so every early
 * return in `varint32` and `varint64` keeps a positive control. The nine-byte
 * row matters most: it is the legal encoding of `9223372036854775807`, the
 * very value the issue's malformed ten-byte witness used to fabricate.
 *
 * Every byte string and every verdict below comes from
 * `packages/typia/test/protobuf_varint_corpus.json`, which the Go test
 * `TestProtobufVarintCorpusMatchesProtowire` holds against
 * `google.golang.org/protobuf`. Nothing here is transcribed, so this regression
 * cannot quietly disagree with the oracle that justifies it.
 *
 * 1. Cross every public integer and boolean reader, and the unknown-field
 *    skipper, with every corpus row.
 * 2. Read the rejected rows again as byte, string, fork, unknown-field, and
 *    group-contained lengths and as a group's field tag.
 * 3. Preserve the decoded value of every accepted row, exact pointer
 *    advancement, and the trailing byte behind it.
 */
export const test_protobuf_reader_varint_bounds = (): void => {
  const entries: ProtobufVarintCorpus.IEntry[] = ProtobufVarintCorpus.entries();
  if (entries.length === 0)
    throw new Error("the shared varint corpus is empty, so nothing was read.");

  //----
  // EVERY VALUE READER, EVERY ROW
  //----
  for (const entry of entries) {
    const octets: number[] = ProtobufVarintCorpus.bytes(entry);
    for (const reader of VALUE_READERS)
      if (entry.fault !== null)
        assertFault(
          `${reader.name} of ${entry.name}`,
          octets,
          ProtobufVarintCorpus.message(entry),
          (r) => reader.read(r),
        );
      else assertAccepted(entry, reader, octets);

    // the skipper consumes the same varint without decoding it, so it must
    // agree on where the varint ends and on whether it exists at all
    if (entry.fault !== null)
      assertFault(
        `skipVarint of ${entry.name}`,
        octets,
        ProtobufVarintCorpus.message(entry),
        (r) => r.skipVarint(),
      );
    else assertAdvance(`skipVarint of ${entry.name}`, entry, octets);
  }

  //----
  // THE SAME ROWS IN EVERY FRAMING POSITION
  //----
  // a malformed varint stays malformed wherever the decoder meets it, so a
  // consumer cannot launder it by reading it as a length or as a tag
  for (const entry of ProtobufVarintCorpus.malformed()) {
    const octets: number[] = ProtobufVarintCorpus.bytes(entry);
    const expected: string = ProtobufVarintCorpus.message(entry);
    assertAtomicFault(`bytes length of ${entry.name}`, octets, expected, (r) =>
      r.bytes(),
    );
    assertAtomicFault(`string length of ${entry.name}`, octets, expected, (r) =>
      r.string(),
    );
    assertAtomicFault(`fork length of ${entry.name}`, octets, expected, (r) =>
      r.fork(),
    );
    assertAtomicFault(
      `unknown LEN length of ${entry.name}`,
      octets,
      expected,
      (r) => r.skipType(ProtobufWire.LEN),
    );
    assertAtomicFault(
      `unknown VARIANT value of ${entry.name}`,
      octets,
      expected,
      (r) => r.skipType(ProtobufWire.VARIANT),
    );
    assertAtomicFault(
      `length inside a group of ${entry.name}`,
      [0x0a, ...octets, 0x0c],
      expected,
      (r) => r.skipType(ProtobufWire.START_GROUP),
    );
    assertAtomicFault(
      `tag inside a group of ${entry.name}`,
      [...ProtobufVarintCorpus.asTag(entry), 0x01, 0x0c],
      expected,
      (r) => r.skipType(ProtobufWire.START_GROUP),
    );
  }

  //----
  // WHAT MUST NOT CHANGE
  //----
  // the two rejections stay named apart. Both rows below are exactly ten bytes
  // wide, so a single message naming a length would be untrue of one of them:
  // one varint would continue into an eleventh byte, the other terminates and
  // carries a value bit above 63. The loops above assert each row's own text,
  // and this pins the distinction the corpus draws between them.
  const overlong: ProtobufVarintCorpus.IEntry =
    ProtobufVarintCorpus.find("ten continuation bytes");
  const overflow: ProtobufVarintCorpus.IEntry =
    ProtobufVarintCorpus.find("excess tenth payload");
  if (
    ProtobufVarintCorpus.bytes(overlong).length !==
    ProtobufVarintCorpus.bytes(overflow).length
  )
    throw new Error(
      "the two rejected rows no longer share a width, so they no longer isolate the fault from the length.",
    );
  if (
    ProtobufVarintCorpus.message(overlong) ===
    ProtobufVarintCorpus.message(overflow)
  )
    throw new Error(
      "an over-long varint and an overflowing one report the same fault again.",
    );

  // `bool` decides on the 32-bit projection rather than on the decoded value,
  // so the corpus value cannot supply its expectation; only its framing is
  // corpus-derived above. The legal ten-byte maximum must still read as true.
  const maximum: ProtobufVarintCorpus.IEntry = ProtobufVarintCorpus.find(
    "canonical 64-bit maximum",
  );
  const subject: _ProtobufReader = new _ProtobufReader(
    Uint8Array.from([...ProtobufVarintCorpus.bytes(maximum), 0x7f]),
  );
  const flag: boolean = subject.bool();
  if (flag !== true || subject.index() !== maximum.consumed)
    throw new Error(
      `bool of ${maximum.name} returned ${flag} at index ${subject.index()} instead of true at ${maximum.consumed}.`,
    );
};

interface IValueReader {
  /** Public reader method name, used in failure labels. */
  name: string;

  /** The call under test. */
  read: (reader: _ProtobufReader) => number | bigint | boolean;

  /**
   * The value this reader must return for a decoded varint, or `null` when the
   * corpus value cannot supply it.
   */
  project: ((value: bigint) => number | bigint | boolean) | null;
}

/**
 * Every public varint consumer, with the projection the wire format demands.
 *
 * A field narrower than the varint keeps the low bits, which is what a
 * Protocol Buffer parser does with a 64-bit varint on a 32-bit field, so each
 * 32-bit expectation is the oracle value reduced rather than an independent
 * guess. `bool` is excluded from the value column and covered separately.
 */
const VALUE_READERS: IValueReader[] = [
  {
    name: "uint32",
    read: (reader) => reader.uint32(),
    project: (value) => Number(BigInt.asUintN(32, value)),
  },
  {
    name: "int32",
    read: (reader) => reader.int32(),
    project: (value) => Number(BigInt.asIntN(32, value)),
  },
  {
    name: "sint32",
    read: (reader) => reader.sint32(),
    project: (value) => Number(zigzag(BigInt.asUintN(32, value))),
  },
  {
    name: "uint64",
    read: (reader) => reader.uint64(),
    project: (value) => value,
  },
  {
    name: "int64",
    read: (reader) => reader.int64(),
    project: (value) => BigInt.asIntN(64, value),
  },
  {
    name: "sint64",
    read: (reader) => reader.sint64(),
    project: (value) => zigzag(value),
  },
  {
    name: "bool",
    read: (reader) => reader.bool(),
    project: null,
  },
];

/** ZigZag decoding, which maps an unsigned varint back onto a signed value. */
const zigzag = (value: bigint): bigint =>
  (value >> BigInt(1)) ^ -(value & BigInt(1));

/**
 * Require the reader to decode an accepted row exactly.
 *
 * A trailing byte follows the varint so that consuming one byte too many or
 * too few is visible as a wrong index rather than as an accidental buffer end.
 */
const assertAccepted = (
  entry: ProtobufVarintCorpus.IEntry,
  reader: IValueReader,
  octets: number[],
): void => {
  const subject: _ProtobufReader = new _ProtobufReader(
    Uint8Array.from([...octets, 0x7f]),
  );
  const actual: number | bigint | boolean = reader.read(subject);
  const expected: number | bigint | boolean | null =
    reader.project === null
      ? null
      : reader.project(ProtobufVarintCorpus.value(entry));
  if (expected !== null && actual !== expected)
    throw new Error(
      `${reader.name} of ${entry.name} returned ${String(actual)} instead of ${String(expected)}.`,
    );
  if (subject.index() !== entry.consumed)
    throw new Error(
      `${reader.name} of ${entry.name} stopped at index ${subject.index()} instead of ${entry.consumed}.`,
    );
};

/** Require a consumer to advance across an accepted row and no further. */
const assertAdvance = (
  label: string,
  entry: ProtobufVarintCorpus.IEntry,
  octets: number[],
): void => {
  const subject: _ProtobufReader = new _ProtobufReader(
    Uint8Array.from([...octets, 0x7f]),
  );
  subject.skipVarint();
  if (subject.index() !== entry.consumed)
    throw new Error(
      `${label} stopped at index ${subject.index()} instead of ${entry.consumed}.`,
    );
};

const assertFault = (
  label: string,
  octets: number[],
  expected: string,
  read: (reader: _ProtobufReader) => unknown,
): void => {
  const subject: _ProtobufReader = new _ProtobufReader(Uint8Array.from(octets));
  assertMessage(label, expected, () => read(subject));
};

/** Require the fault and the atomic restoration the framing readers promise. */
const assertAtomicFault = (
  label: string,
  octets: number[],
  expected: string,
  read: (reader: _ProtobufReader) => unknown,
): void => {
  const subject: _ProtobufReader = new _ProtobufReader(Uint8Array.from(octets));
  const size: number = subject.size();
  assertMessage(label, expected, () => read(subject));
  if (subject.index() !== 0 || subject.size() !== size)
    throw new Error(
      `${label} left index ${subject.index()} and size ${subject.size()} instead of restoring the reader.`,
    );
};

const assertMessage = (
  label: string,
  expected: string,
  closure: () => unknown,
): void => {
  try {
    closure();
  } catch (error) {
    if (error instanceof Error && error.message === expected) return;
    throw new Error(
      `${label} reported ${String(error)} instead of ${JSON.stringify(expected)}.`,
    );
  }
  throw new Error(`${label} accepted a malformed Protobuf varint.`);
};
