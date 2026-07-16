import { ProtobufWire } from "@typia/interface";
import { _ProtobufReader } from "typia/lib/internal/_ProtobufReader";

/**
 * Verifies the runtime Protobuf reader rejects incomplete sized reads
 * atomically.
 *
 * Typed-array slicing clamps an oversized end instead of throwing, so the
 * reader itself must own payload bounds and preserve its pointer on failure.
 * The same invariant applies to fixed-width values and unknown-field skips.
 *
 * 1. Read zero-length, exact-end, and sliced-buffer payloads successfully.
 * 2. Reject one-byte-short bytes, strings, float, double, and skip payloads.
 * 3. Assert every rejected read reports the stable overflow and keeps its index.
 */
export const test_protobuf_reader_bounds = (): void => {
  const empty: _ProtobufReader = new _ProtobufReader(Uint8Array.of(0));
  if (empty.bytes().length !== 0 || empty.index() !== 1)
    throw new Error("zero-length bytes did not consume exactly their prefix.");

  const exact: _ProtobufReader = new _ProtobufReader(
    Uint8Array.of(2, 0x61, 0x62),
  );
  if (new TextDecoder().decode(exact.bytes()) !== "ab" || exact.index() !== 3)
    throw new Error("exact-end bytes did not consume their complete payload.");

  const backing: Uint8Array = Uint8Array.of(0xff, 2, 0x61, 0x62, 0xff);
  const sliced: _ProtobufReader = new _ProtobufReader(backing.subarray(1, 4));
  if (sliced.string() !== "ab" || sliced.index() !== 3)
    throw new Error("a bounded Uint8Array view read outside its own payload.");

  assertOverflow("bytes", new _ProtobufReader(Uint8Array.of(3, 1, 2)), (r) =>
    r.bytes(),
  );
  assertOverflow("string", new _ProtobufReader(Uint8Array.of(2, 0xc3)), (r) =>
    r.string(),
  );
  assertOverflow(
    "sliced bytes",
    new _ProtobufReader(backing.subarray(1, 3)),
    (r) => r.bytes(),
  );
  assertOverflow("float", new _ProtobufReader(Uint8Array.of(0, 0, 0)), (r) =>
    r.float(),
  );
  assertOverflow(
    "double",
    new _ProtobufReader(Uint8Array.of(0, 0, 0, 0, 0, 0, 0)),
    (r) => r.double(),
  );
  assertOverflow(
    "fixed32 skip",
    new _ProtobufReader(Uint8Array.of(0, 0, 0)),
    (r) => r.skipType(ProtobufWire.I32),
  );
  assertOverflow(
    "fixed64 skip",
    new _ProtobufReader(Uint8Array.of(0, 0, 0, 0, 0, 0, 0)),
    (r) => r.skipType(ProtobufWire.I64),
  );
  assertOverflow(
    "length-delimited skip",
    new _ProtobufReader(Uint8Array.of(2, 1)),
    (r) => r.skipType(ProtobufWire.LEN),
  );
  assertOverflow("varint skip", new _ProtobufReader(Uint8Array.of(0x80)), (r) =>
    r.skipType(ProtobufWire.VARIANT),
  );

  const framed: _ProtobufReader = new _ProtobufReader(
    Uint8Array.of(2, 1, 2, 9),
  );
  const previous: number = framed.fork();
  if (framed.size() !== 3 || framed.bytes()[0] !== 2)
    throw new Error("fork did not expose exactly its declared payload.");
  framed.close(previous);
  if (framed.size() !== 4 || framed.uint32() !== 9)
    throw new Error("close did not restore the enclosing reader boundary.");

  assertOverflow("fork", new _ProtobufReader(Uint8Array.of(3, 1, 2)), (r) =>
    r.fork(),
  );
};

const assertOverflow = (
  label: string,
  reader: _ProtobufReader,
  closure: (reader: _ProtobufReader) => unknown,
): void => {
  const index: number = reader.index();
  const size: number = reader.size();
  try {
    closure(reader);
  } catch (error) {
    if (
      error instanceof Error &&
      error.message === "Error on typia.protobuf.decode(): buffer overflow." &&
      reader.index() === index &&
      reader.size() === size
    )
      return;
    throw new Error(
      `${label} reported ${String(error)} at index ${reader.index()} instead of the stable atomic overflow.`,
    );
  }
  throw new Error(`${label} accepted a truncated Protobuf payload.`);
};
