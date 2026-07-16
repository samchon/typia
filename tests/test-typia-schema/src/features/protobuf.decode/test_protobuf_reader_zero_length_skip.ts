import { ProtobufWire } from "@typia/interface";
import { _ProtobufReader } from "typia/lib/internal/_ProtobufReader";

/**
 * Verifies the runtime Protobuf reader skips every unknown wire type by its
 * exact width.
 *
 * A length-delimited field may legally declare a length of zero, so the skip
 * operation must not read a length of zero as a request to consume a varint.
 * That confusion swallows the following field's tag and desynchronizes the
 * parser on well-formed input, while the varint wire type carries no length
 * prefix and genuinely needs the varint-consuming skip.
 *
 * 1. Skip zero-length, non-zero, mid-buffer, and trailing length-delimited fields.
 * 2. Skip single-byte and multi-byte varints, fixed-width fields, and a group
 *    whose member declares a zero length.
 * 3. Assert every skip lands on the exact following byte, that a zero-length skip
 *    honors an enclosing `fork` boundary, and that truncated fields are still
 *    rejected atomically.
 */
export const test_protobuf_reader_zero_length_skip = (): void => {
  assertSkip("zero-length LEN before another field", [0x00, 0x0a], 1, (r) =>
    r.skipType(ProtobufWire.LEN),
  );
  assertSkip("zero-length LEN as the last field", [0x00], 1, (r) =>
    r.skipType(ProtobufWire.LEN),
  );
  assertSkip(
    "non-zero LEN before another field",
    [0x02, 0x61, 0x62, 0x0a],
    3,
    (r) => r.skipType(ProtobufWire.LEN),
  );
  assertSkip(
    "multi-byte length LEN",
    [0x80, 0x01, ...new Array(128).fill(0)],
    130,
    (r) => r.skipType(ProtobufWire.LEN),
  );

  assertSkip("single-byte VARIANT", [0x7f, 0x0a], 1, (r) =>
    r.skipType(ProtobufWire.VARIANT),
  );
  assertSkip("multi-byte VARIANT", [0x80, 0x80, 0x01, 0x0a], 3, (r) =>
    r.skipType(ProtobufWire.VARIANT),
  );
  assertSkip("zero VARIANT", [0x00, 0x0a], 1, (r) =>
    r.skipType(ProtobufWire.VARIANT),
  );

  assertSkip("I64", [0, 0, 0, 0, 0, 0, 0, 0, 0x0a], 8, (r) =>
    r.skipType(ProtobufWire.I64),
  );
  assertSkip("I32", [0, 0, 0, 0, 0x0a], 4, (r) => r.skipType(ProtobufWire.I32));

  // group members: field 1 LEN length 0, then the field 3 END_GROUP tag
  assertSkip(
    "group with a zero-length LEN member",
    [0x0a, 0x00, 0x1c],
    3,
    (r) => r.skipType(ProtobufWire.START_GROUP),
  );
  // nested group: field 2 START_GROUP, zero-length LEN member, both END_GROUPs
  assertSkip(
    "nested group with a zero-length LEN member",
    [0x13, 0x0a, 0x00, 0x14, 0x1c],
    5,
    (r) => r.skipType(ProtobufWire.START_GROUP),
  );

  // a zero-length skip must consume nothing beyond an enclosing fork boundary
  const framed: _ProtobufReader = new _ProtobufReader(
    Uint8Array.of(0x02, 0x12, 0x00, 0x0a),
  );
  const previous: number = framed.fork();
  framed.skipType(framed.uint32() & 0x07);
  if (framed.index() !== 3)
    throw new Error(
      `a trailing zero-length skip left index ${framed.index()} instead of its frame end.`,
    );
  framed.close(previous);
  if (framed.uint32() !== 0x0a)
    throw new Error("a zero-length skip consumed the enclosing message's tag.");

  // #2083: a declared length beyond the buffer is still rejected atomically
  assertOverflow("truncated LEN", [0x02, 0x61], (r) =>
    r.skipType(ProtobufWire.LEN),
  );
  assertOverflow("LEN at the buffer end", [0x01], (r) =>
    r.skipType(ProtobufWire.LEN),
  );
  assertOverflow("truncated VARIANT", [0x80], (r) =>
    r.skipType(ProtobufWire.VARIANT),
  );
  assertOverflow("truncated group member", [0x0a, 0x02, 0x61], (r) =>
    r.skipType(ProtobufWire.START_GROUP),
  );
};

const assertSkip = (
  label: string,
  bytes: number[],
  expected: number,
  closure: (reader: _ProtobufReader) => void,
): void => {
  const reader: _ProtobufReader = new _ProtobufReader(Uint8Array.from(bytes));
  closure(reader);
  if (reader.index() !== expected)
    throw new Error(
      `${label} left index ${reader.index()} instead of ${expected}.`,
    );
};

const assertOverflow = (
  label: string,
  bytes: number[],
  closure: (reader: _ProtobufReader) => void,
): void => {
  const reader: _ProtobufReader = new _ProtobufReader(Uint8Array.from(bytes));
  try {
    closure(reader);
  } catch (error) {
    if (
      error instanceof Error &&
      error.message === "Error on typia.protobuf.decode(): buffer overflow." &&
      reader.index() === 0
    )
      return;
    throw new Error(
      `${label} reported ${String(error)} at index ${reader.index()} instead of the stable atomic overflow.`,
    );
  }
  throw new Error(`${label} accepted a truncated Protobuf payload.`);
};
