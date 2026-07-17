import { ProtobufWire } from "@typia/interface";
import { _ProtobufReader } from "typia/lib/internal/_ProtobufReader";

/**
 * Verifies every fault the runtime Protobuf reader raises while skipping an
 * unknown field identifies typia and bounds its varint.
 *
 * Skipping unknown fields is the one reader surface a payload author fully
 * controls, so both of these faults are reachable from `typia.protobuf.decode`.
 * A reserved wire type must not report an anonymous error that leaves the caller
 * unable to attribute the failure, and a varint must not be consumed past the
 * ten bytes a 64-bit value can legally occupy merely because the skip path
 * discards the bytes it reads. `varint32` and `varint64` are already
 * structurally bounded at ten, so a skip that is not makes the limit depend on
 * which method happens to consume the varint.
 *
 * 1. Reject every wire type that carries no skip semantics, including the
 *    reserved 6 and 7 and a bare END_GROUP, directly, from a non-zero offset,
 *    and nested inside a group.
 * 2. Skip varints up to the ten-byte limit and reject the eleventh byte, while a
 *    varint the buffer truncates before that limit still reports overflow.
 * 3. Assert every fault carries the standard prefix and restores the reader,
 *    and that the legal wire types and `uint32` are left untouched.
 */
export const test_protobuf_reader_unknown_field_faults = (): void => {
  //----
  // RESERVED AND NON-SKIPPABLE WIRE TYPES
  //----
  // the generated decoder passes `tag & 0x07`, so every one of these is reachable
  assertMessage("reserved wire type 6", [], `${PREFIX}invalid wire type 6 at offset 0.`, (r) =>
    r.skipType(6 as ProtobufWire),
  );
  assertMessage("reserved wire type 7", [], `${PREFIX}invalid wire type 7 at offset 0.`, (r) =>
    r.skipType(7 as ProtobufWire),
  );
  // END_GROUP closes a group and carries no payload, so it is not skippable
  assertMessage("bare END_GROUP", [], `${PREFIX}invalid wire type 4 at offset 0.`, (r) =>
    r.skipType(ProtobufWire.END_GROUP),
  );
  // a group member may itself declare a reserved wire type: field 6, wire type 6
  assertMessage("reserved wire type inside a group", [0x36], `${PREFIX}invalid wire type 6 at offset 1.`, (r) =>
    r.skipType(ProtobufWire.START_GROUP),
  );

  // the reported offset is the reader's own position rather than always zero,
  // and the failed skip restores that position instead of the buffer start
  const advanced: _ProtobufReader = new _ProtobufReader(
    Uint8Array.of(0x00, 0x00),
  );
  advanced.skipType(ProtobufWire.VARIANT);
  advanced.skipType(ProtobufWire.VARIANT);
  const raised: Error = expect("a reserved wire type at a non-zero offset", () =>
    advanced.skipType(6 as ProtobufWire),
  );
  if (raised.message !== `${PREFIX}invalid wire type 6 at offset 2.`)
    throw new Error(
      `a reserved wire type at a non-zero offset reported ${JSON.stringify(raised.message)}.`,
    );
  if (advanced.index() !== 2)
    throw new Error(
      `a failed skip left index ${advanced.index()} instead of restoring 2.`,
    );

  //----
  // THE TEN-BYTE VARINT LIMIT
  //----
  // ten bytes is the maximum a 64-bit value occupies in seven-bit groups
  assertSkip("single-byte varint", [0x00, 0x0a], 1);
  assertSkip("two-byte varint", [0x80, 0x01, 0x0a], 2);
  assertSkip("nine-byte varint", [...continuations(8), 0x01, 0x0a], 9);
  assertSkip("ten-byte varint", [...continuations(9), 0x01, 0x0a], 10);

  // the eleventh byte is one past the limit and must be rejected, not skipped
  assertMessage("eleven-byte varint", [...continuations(10), 0x01, 0x0a], OVERLONG, (r) =>
    r.skipVarint(),
  );
  // the issue's witness: a thirteen-byte varint was accepted, leaving ptr at 13
  assertMessage("thirteen-byte varint", [...continuations(12), 0x01], OVERLONG, (r) =>
    r.skipVarint(),
  );
  // a runaway of continuation bytes is a length fault, decided at byte ten
  assertMessage("runaway varint", continuations(64), OVERLONG, (r) =>
    r.skipVarint(),
  );
  // the limit falls exactly on the buffer end: still an over-long varint,
  // because no eleventh byte could make these ten continuation bytes legal
  assertMessage("ten continuation bytes", continuations(10), OVERLONG, (r) =>
    r.skipVarint(),
  );

  // #2083: a varint the buffer truncates before the limit stays a framing fault
  assertMessage("truncated varint", [0x80], OVERFLOW, (r) => r.skipVarint());
  assertMessage("truncated five-byte varint", continuations(5), OVERFLOW, (r) =>
    r.skipVarint(),
  );

  // the same limit applies through the public unknown-field entry point
  assertSkip("ten-byte varint through skipType", [...continuations(9), 0x01], 10, (r) =>
    r.skipType(ProtobufWire.VARIANT),
  );
  assertMessage("eleven-byte varint through skipType", [...continuations(10), 0x01], OVERLONG, (r) =>
    r.skipType(ProtobufWire.VARIANT),
  );

  //----
  // WHAT MUST NOT CHANGE
  //----
  // every legal wire type still skips by its exact width (#2116)
  assertSkip("zero-length LEN", [0x00, 0x0a], 1, (r) =>
    r.skipType(ProtobufWire.LEN),
  );
  assertSkip("non-zero LEN", [0x02, 0x61, 0x62, 0x0a], 3, (r) =>
    r.skipType(ProtobufWire.LEN),
  );
  assertSkip("I64", [0, 0, 0, 0, 0, 0, 0, 0, 0x0a], 8, (r) =>
    r.skipType(ProtobufWire.I64),
  );
  assertSkip("I32", [0, 0, 0, 0, 0x0a], 4, (r) => r.skipType(ProtobufWire.I32));
  assertSkip("group", [0x0a, 0x00, 0x1c], 3, (r) =>
    r.skipType(ProtobufWire.START_GROUP),
  );

  // `varint32` keeps capping at ten bytes rather than throwing: the reader's
  // value paths are unchanged, and only the skip path gained the limit it lacked
  const capped: _ProtobufReader = new _ProtobufReader(
    Uint8Array.from([...continuations(10), 0x01]),
  );
  if (capped.uint32() !== 0 || capped.index() !== 10)
    throw new Error(
      `uint32 stopped at index ${capped.index()} instead of its ten-byte cap.`,
    );
};

/** Bytes carrying only the continuation bit, so a varint never terminates. */
const continuations = (count: number): number[] =>
  new Array(count).fill(0x80) as number[];

const assertSkip = (
  label: string,
  bytes: number[],
  expected: number,
  closure: (reader: _ProtobufReader) => void = (r) => r.skipVarint(),
): void => {
  const reader: _ProtobufReader = new _ProtobufReader(Uint8Array.from(bytes));
  closure(reader);
  if (reader.index() !== expected)
    throw new Error(
      `${label} left index ${reader.index()} instead of ${expected}.`,
    );
};

/** Requires the closure to reject, and hands its error back for inspection. */
const expect = (label: string, closure: () => void): Error => {
  try {
    closure();
  } catch (error) {
    if (error instanceof Error) return error;
    throw new Error(`${label} raised ${String(error)} instead of an Error.`);
  }
  throw new Error(`${label} was accepted by the Protobuf reader.`);
};

/**
 * Requires an exact error message and an atomically restored reader.
 *
 * The message is compared whole rather than by prefix. The prefix is the point
 * of the contract, but a fault that keeps the prefix while losing the wire type
 * or the limit it names would still leave the caller without a diagnosis.
 */
const assertMessage = (
  label: string,
  bytes: number[],
  expected: string,
  closure: (reader: _ProtobufReader) => void,
): void => {
  const reader: _ProtobufReader = new _ProtobufReader(Uint8Array.from(bytes));
  const size: number = reader.size();
  const error: Error = expect(label, () => closure(reader));
  if (error.message !== expected)
    throw new Error(
      `${label} reported ${JSON.stringify(error.message)} instead of ${JSON.stringify(expected)}.`,
    );
  if (reader.index() !== 0 || reader.size() !== size)
    throw new Error(
      `${label} left index ${reader.index()} and size ${reader.size()} instead of restoring the reader.`,
    );
};

const PREFIX = "Error on typia.protobuf.decode(): ";
const OVERFLOW = `${PREFIX}buffer overflow.`;
const OVERLONG = `${PREFIX}varint exceeds 10 bytes.`;
