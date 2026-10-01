import { _ProtobufReader } from "typia/lib/internal/_ProtobufReader";
import { _ProtobufSizer } from "typia/lib/internal/_ProtobufSizer";
import { _ProtobufWriter } from "typia/lib/internal/_ProtobufWriter";

/**
 * Verifies `sint32` round-trips through the sizer, writer and reader at the
 * ZigZag boundaries.
 *
 * The ZigZag mapping of a 32-bit signed value is an unsigned 32-bit value that
 * needs five varint bytes once the magnitude reaches 2^30. The sizer and the
 * writer used to keep the mapping signed, so such a value was sized as a
 * negative number and written as one truncated byte, which decoded to another
 * number.
 *
 * 1. Size, write and read each value around the 2^30 and 2^31 boundaries.
 * 2. Require the writer to fill exactly the size that the sizer announced.
 * 3. Require the reader to return the original value and the canonical bytes.
 *
 * @evidence contracts/testing.md#behavioral-verification The sizer, writer and reader run on boundary values and the announced length, written bytes and decoded value are compared, so a signed ZigZag mapping that mis-sizes or truncates a large magnitude changes the result.
 * @evidence contracts/testing.md#independent-expectations Protocol Buffers defines sint32 as ZigZag, `(n << 1) ^ (n >> 31)` as an unsigned value, and the expected bytes are written by hand from that definition and the varint encoding rather than computed by the encoder.
 * @evidence contracts/testing.md#distinguishing-cases Values below 2^30 (one to five bytes) are the adjacent cases that already worked, and 2^30, 2^31 - 1, -(2^30) - 1 and -(2^31) are the cases that fail with a signed mapping.
 * @evidence contracts/testing.md#execution-ownership test-typia-schema runs this exported function through DynamicExecutor and imports only the runtime protobuf classes from the built typia package, with no transform or native plugin involved.
 */
export const test_protobuf_sint32_zigzag_boundaries = (): void => {
  for (const [value, bytes] of VECTORS) {
    const sizer: _ProtobufSizer = new _ProtobufSizer();
    sizer.sint32(value);
    if (sizer.len !== bytes.length)
      throw new Error(
        `sint32 ${value} was sized as ${sizer.len} bytes instead of ${bytes.length}.`,
      );

    const writer: _ProtobufWriter = new _ProtobufWriter(sizer);
    writer.sint32(value);
    const written: Uint8Array = writer.finish();
    if (
      written.length !== bytes.length ||
      bytes.some((b, i) => written[i] !== b)
    )
      throw new Error(
        `sint32 ${value} was written as [${Array.from(written).join(", ")}] instead of [${bytes.join(", ")}].`,
      );

    const decoded: number = new _ProtobufReader(written).sint32();
    if (decoded !== value)
      throw new Error(`sint32 ${value} was decoded as ${decoded}.`);
  }
};

const VECTORS: Array<[number, number[]]> = [
  [0, [0x00]],
  [1, [0x02]],
  [-1, [0x01]],
  [2 ** 29, [0x80, 0x80, 0x80, 0x80, 0x04]],
  [2 ** 30 - 1, [0xfe, 0xff, 0xff, 0xff, 0x07]],
  [2 ** 30, [0x80, 0x80, 0x80, 0x80, 0x08]],
  [2 ** 31 - 1, [0xfe, 0xff, 0xff, 0xff, 0x0f]],
  [-(2 ** 30), [0xff, 0xff, 0xff, 0xff, 0x07]],
  [-(2 ** 30) - 1, [0x81, 0x80, 0x80, 0x80, 0x08]],
  [-(2 ** 31), [0xff, 0xff, 0xff, 0xff, 0x0f]],
];
