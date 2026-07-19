import { ProtobufWire } from "@typia/interface";
import { _ProtobufReader } from "typia/lib/internal/_ProtobufReader";

/**
 * Verifies every runtime Protobuf varint reader enforces the 64-bit wire
 * boundary.
 *
 * A ten-byte varint has room for only one payload bit in its final byte. The
 * scalar readers, length readers, and unknown-field skipper must reject both a
 * continuing tenth byte and a terminating tenth byte with any higher payload
 * bit instead of returning a truncated value or accepting a zero length.
 *
 * 1. Cross every public integer and boolean reader with both malformed endings and
 *    truncation at every earlier byte.
 * 2. Exercise bytes, strings, forks, unknown fields, and nested groups through the
 *    same malformed length and tag boundaries.
 * 3. Preserve canonical maxima, valid non-canonical encodings, exact pointer
 *    advancement, and trailing data.
 */
export const test_protobuf_reader_varint_bounds = (): void => {
  for (const [name, read] of VALUE_READERS) {
    assertFault(`${name} without a terminator`, NO_TERMINATOR, OVERLONG, read);
    assertFault(
      `${name} with excess tenth payload`,
      EXCESS_TENTH,
      OVERLONG,
      read,
    );

    for (let count: number = 1; count < 10; ++count)
      assertFault(
        `${name} truncated after ${count} byte${count === 1 ? "" : "s"}`,
        continuations(count),
        OVERFLOW,
        read,
      );
  }

  assertValue(
    "uint32 maximum",
    UINT64_MAX,
    (reader) => reader.uint32(),
    0xffffffff,
  );
  assertValue("int32 negative one", UINT64_MAX, (reader) => reader.int32(), -1);
  assertValue(
    "sint32 minimum",
    UINT64_MAX,
    (reader) => reader.sint32(),
    -0x80000000,
  );
  assertValue(
    "uint64 maximum",
    UINT64_MAX,
    (reader) => reader.uint64(),
    (1n << 64n) - 1n,
  );
  assertValue(
    "int64 negative one",
    UINT64_MAX,
    (reader) => reader.int64(),
    -1n,
  );
  assertValue(
    "sint64 minimum",
    UINT64_MAX,
    (reader) => reader.sint64(),
    -(1n << 63n),
  );
  assertValue("boolean maximum", UINT64_MAX, (reader) => reader.bool(), true);

  for (const [name, read] of VALUE_READERS) {
    assertZero(`${name} two-byte zero`, [0x80, 0x00, 0x7f], 2, read);
    assertZero(
      `${name} ten-byte zero`,
      [...continuations(9), 0x00, 0x7f],
      10,
      read,
    );
  }

  for (const malformed of [NO_TERMINATOR, EXCESS_TENTH]) {
    assertAtomicFault("bytes length", malformed, (reader) => reader.bytes());
    assertAtomicFault("string length", malformed, (reader) => reader.string());
    assertAtomicFault("fork length", malformed, (reader) => reader.fork());
    assertAtomicFault("unknown LEN length", malformed, (reader) =>
      reader.skipType(ProtobufWire.LEN),
    );
    assertAtomicFault("unknown VARIANT value", malformed, (reader) =>
      reader.skipVarint(),
    );
    assertAtomicFault(
      "length inside a group",
      [0x0a, ...malformed, 0x0c],
      (reader) => reader.skipType(ProtobufWire.START_GROUP),
    );
    assertAtomicFault(
      "tag inside a group",
      [0x88, ...malformed.slice(1), 0x01, 0x0c],
      (reader) => reader.skipType(ProtobufWire.START_GROUP),
    );
  }
};

type Reader = (reader: _ProtobufReader) => number | bigint | boolean;

const VALUE_READERS: ReadonlyArray<readonly [string, Reader]> = [
  ["uint32", (reader) => reader.uint32()],
  ["int32", (reader) => reader.int32()],
  ["sint32", (reader) => reader.sint32()],
  ["uint64", (reader) => reader.uint64()],
  ["int64", (reader) => reader.int64()],
  ["sint64", (reader) => reader.sint64()],
  ["bool", (reader) => reader.bool()],
];

const assertFault = (
  label: string,
  bytes: readonly number[],
  expected: string,
  read: Reader,
): void => {
  const reader: _ProtobufReader = new _ProtobufReader(Uint8Array.from(bytes));
  assertMessage(label, expected, () => read(reader));
};

const assertAtomicFault = (
  label: string,
  bytes: readonly number[],
  read: (reader: _ProtobufReader) => unknown,
): void => {
  const reader: _ProtobufReader = new _ProtobufReader(Uint8Array.from(bytes));
  const size: number = reader.size();
  assertMessage(label, OVERLONG, () => read(reader));
  if (reader.index() !== 0 || reader.size() !== size)
    throw new Error(
      `${label} left index ${reader.index()} and size ${reader.size()} instead of restoring the reader.`,
    );
};

const assertValue = <T extends number | bigint | boolean>(
  label: string,
  bytes: readonly number[],
  read: (reader: _ProtobufReader) => T,
  expected: T,
): void => {
  const reader: _ProtobufReader = new _ProtobufReader(
    Uint8Array.from([...bytes, 0x7f]),
  );
  const actual: T = read(reader);
  if (actual !== expected || reader.index() !== bytes.length)
    throw new Error(
      `${label} returned ${String(actual)} at index ${reader.index()} instead of ${String(expected)} at ${bytes.length}.`,
    );
};

const assertZero = (
  label: string,
  bytes: readonly number[],
  expectedIndex: number,
  read: Reader,
): void => {
  const reader: _ProtobufReader = new _ProtobufReader(Uint8Array.from(bytes));
  const actual: number | bigint | boolean = read(reader);
  if (
    (actual !== 0 && actual !== 0n && actual !== false) ||
    reader.index() !== expectedIndex
  )
    throw new Error(
      `${label} returned ${String(actual)} at index ${reader.index()} instead of zero at ${expectedIndex}.`,
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

const continuations = (count: number): number[] =>
  new Array(count).fill(0x80) as number[];

const NO_TERMINATOR = continuations(10);
const EXCESS_TENTH = [...continuations(9), 0x02] as const;
const UINT64_MAX = [
  0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0x01,
] as const;
const PREFIX = "Error on typia.protobuf.decode(): ";
const OVERFLOW = `${PREFIX}buffer overflow.`;
const OVERLONG = `${PREFIX}varint exceeds 10 bytes.`;
