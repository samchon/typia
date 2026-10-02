import { _ProtobufReader } from "typia/lib/internal/_ProtobufReader";

/**
 * Verifies the runtime reader interprets raw 64-bit varints at each scalar
 * boundary.
 *
 * Protocol Buffers defines the wire varint as an unsigned bit pattern. This
 * locks the separate unsigned, two's-complement, and ZigZag interpretations so
 * a high bit cannot leak signedness between `uint64`, `int64`, and `sint64`.
 *
 * 1. Decode canonical unsigned vectors around bits 31, 32, 53, 63, and 64.
 * 2. Decode both signed extrema and their adjacent ordinary values.
 * 3. Decode the ZigZag extrema and neighboring values from canonical bytes.
 */
export const test_protobuf_reader_64bit_varints = (): void => {
  for (const [bytes, expected] of UINT64_VECTORS)
    assert(
      "uint64",
      new _ProtobufReader(Uint8Array.from(bytes)).uint64(),
      expected,
    );
  for (const [bytes, expected] of INT64_VECTORS)
    assert(
      "int64",
      new _ProtobufReader(Uint8Array.from(bytes)).int64(),
      expected,
    );
  for (const [bytes, expected] of SINT64_VECTORS)
    assert(
      "sint64",
      new _ProtobufReader(Uint8Array.from(bytes)).sint64(),
      expected,
    );
};

const assert = (kind: string, actual: bigint, expected: bigint): void => {
  if (actual !== expected)
    throw new Error(`${kind} decoded ${actual} instead of ${expected}.`);
};

const UINT64_VECTORS = [
  [[0x00], 0n],
  [[0x80, 0x80, 0x80, 0x80, 0x08], 1n << 31n],
  [[0x80, 0x80, 0x80, 0x80, 0x10], 1n << 32n],
  [[0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x10], 1n << 53n],
  [[0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0x7f], (1n << 63n) - 1n],
  [[0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x01], 1n << 63n],
  [
    [0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0x01],
    (1n << 64n) - 1n,
  ],
] as const;

const INT64_VECTORS = [
  [[0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x01], -(1n << 63n)],
  [[0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0x01], -1n],
  [[0x00], 0n],
  [[0x01], 1n],
  [[0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0x7f], (1n << 63n) - 1n],
] as const;

const SINT64_VECTORS = [
  [[0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0x01], -(1n << 63n)],
  [[0x03], -2n],
  [[0x01], -1n],
  [[0x00], 0n],
  [[0x02], 1n],
  [[0x04], 2n],
  [
    [0xfe, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0x01],
    (1n << 63n) - 1n,
  ],
] as const;
