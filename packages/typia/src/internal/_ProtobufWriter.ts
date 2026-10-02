import { Singleton } from "@typia/utils";

import { _IProtobufWriter } from "./_IProtobufWriter";
import { _ProtobufSizer } from "./_ProtobufSizer";

/// @reference https://github.com/piotr-oles/as-proto/blob/main/packages/as-proto/assembly/internal/FixedWriter.ts
/**
 * Writes a Protocol Buffer message into a buffer that {@link _ProtobufSizer}
 * sized.
 *
 * The calls must match the sizer's calls in order, because string and message
 * lengths are read back from the sizer instead of being measured again. Adapted
 * from the fixed writer of as-proto.
 *
 * @evidence contracts/common.md#principled-implementation The writer allocates one buffer of the length the sizer measured and fills it in the same call order, reading the recorded string and message lengths from the sizer in sequence, so no length is recomputed and the buffer is exactly the right size. Varints are written in seven-bit groups, ZigZag values are unsigned, floats are little-endian and strings are UTF-8 encoded.
 * @evidence contracts/common.md#clear-and-simple-design One class holding the buffer, a data view, the write pointer and a cursor into the sizer's lengths; its private varint writers are shared by the scalar methods.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts It adapts the as-proto fixed writer and follows the protobuf wire format; a call order that differs from the sizer's is a contract violation that this class does not detect.
 * @evidence contracts/common.md#meaningful-documentation A reference comment names the origin and the fields have comments; the public methods are documented individually.
 */
export class _ProtobufWriter implements _IProtobufWriter {
  /** Related sizer */
  private readonly sizer: _ProtobufSizer;

  /** Current pointer. */
  private ptr: number;

  /** Protobuf buffer. */
  private buf: Uint8Array;

  /** DataView for buffer. */
  private view: DataView;

  /** Index in varlen array from sizer. */
  private varlenidx: number;

  constructor(sizer: _ProtobufSizer) {
    this.sizer = sizer;
    this.buf = new Uint8Array(sizer.len);
    this.view = new DataView(this.buf.buffer);
    this.ptr = 0;
    this.varlenidx = 0;
  }

  /**
   * Return the buffer that is being filled.
   *
   * @evidence contracts/common.md#principled-implementation Returns the buffer that is being filled, which has the final length from construction.
   * @evidence contracts/common.md#clear-and-simple-design One accessor.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts It returns the same buffer and does not copy.
   * @evidence contracts/common.md#meaningful-documentation A short comment states what is returned.
   */
  buffer(): Uint8Array {
    return this.buf;
  }

  /**
   * Write a boolean as one byte.
   *
   * @evidence contracts/common.md#principled-implementation One byte of zero or one, through the byte writer.
   * @evidence contracts/common.md#clear-and-simple-design One delegation.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The rule is the wire format's.
   * @evidence contracts/common.md#meaningful-documentation A short comment states what is written.
   */
  bool(value: boolean): void {
    this.byte(value ? 1 : 0);
  }

  /**
   * Write the low eight bits of the value.
   *
   * @evidence contracts/common.md#principled-implementation Writes the low eight bits of the value at the pointer and advances it, which is the primitive that bool and the varint writers build on.
   * @evidence contracts/common.md#clear-and-simple-design One store.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The mask makes an out-of-range input wrap instead of corrupting neighbors.
   * @evidence contracts/common.md#meaningful-documentation A short comment states what is written.
   */
  byte(value: number): void {
    this.buf[this.ptr++] = value & 255;
  }

  /**
   * Write a signed 32-bit integer; a negative value is sign-extended to a
   * 64-bit varint.
   *
   * @evidence contracts/common.md#principled-implementation A negative value goes through the 64-bit writer so it is sign-extended to ten bytes, and a non-negative one is written as an unsigned 32-bit varint.
   * @evidence contracts/common.md#clear-and-simple-design One branch over two writers.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The rule is the wire format's.
   * @evidence contracts/common.md#meaningful-documentation A short comment states what is written.
   */
  int32(value: number): void {
    if (value < 0) this.int64(value);
    else this.variant32(value >>> 0);
  }

  /**
   * Write a signed 32-bit integer in ZigZag form as an unsigned varint.
   *
   * @evidence contracts/common.md#principled-implementation The ZigZag value is converted to unsigned before the varint is written, so magnitudes of 2^30 or more are written in five bytes; the sizer measures the same value, so the announced and written lengths agree.
   * @evidence contracts/common.md#clear-and-simple-design One expression over the shared writer.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The mapping is the protobuf definition.
   * @evidence contracts/common.md#meaningful-documentation A comment states the unsigned mapping and why it is needed.
   */
  sint32(value: number): void {
    // ZigZag is an unsigned value; the unsigned shift keeps a magnitude of 2^30
    // or more from being read as a negative number by the varint writer.
    this.variant32(((value << 1) ^ (value >> 31)) >>> 0);
  }

  /**
   * Write an unsigned 32-bit integer as a varint.
   *
   * @evidence contracts/common.md#principled-implementation The value is written as a seven-bit group varint.
   * @evidence contracts/common.md#clear-and-simple-design One delegation.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The rule is the wire format's.
   * @evidence contracts/common.md#meaningful-documentation A short comment states what is written.
   */
  uint32(value: number): void {
    this.variant32(value);
  }

  /**
   * Write a signed 64-bit integer in ZigZag form.
   *
   * @evidence contracts/common.md#principled-implementation The number or bigint is converted to a bigint and ZigZag mapped, then written as an unsigned 64-bit varint.
   * @evidence contracts/common.md#clear-and-simple-design One expression over the 64-bit writer.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The mapping is the protobuf definition.
   * @evidence contracts/common.md#meaningful-documentation A short comment states what is written.
   */
  sint64(value: number | bigint): void {
    value = BigInt(value);
    this.variant64((value << BigInt(0x01)) ^ (value >> BigInt(0x3f)));
  }

  /**
   * Write a signed 64-bit integer as a varint of its unsigned pattern.
   *
   * @evidence contracts/common.md#principled-implementation The value is converted to a bigint and written as an unsigned 64-bit pattern, so negative values take ten bytes.
   * @evidence contracts/common.md#clear-and-simple-design One delegation.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The rule is the wire format's.
   * @evidence contracts/common.md#meaningful-documentation A short comment states what is written.
   */
  int64(value: number | bigint): void {
    this.variant64(BigInt(value));
  }

  /**
   * Write an unsigned 64-bit integer as a varint.
   *
   * @evidence contracts/common.md#principled-implementation The value is converted to a bigint and written as a 64-bit varint.
   * @evidence contracts/common.md#clear-and-simple-design One delegation.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The rule is the wire format's.
   * @evidence contracts/common.md#meaningful-documentation A short comment states what is written.
   */
  uint64(value: number | bigint): void {
    this.variant64(BigInt(value));
  }

  /**
   * Write a 32-bit float in little-endian order.
   *
   * @evidence contracts/common.md#principled-implementation Four little-endian bytes through the data view, advancing the pointer.
   * @evidence contracts/common.md#clear-and-simple-design One store.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The rule is the wire format's.
   * @evidence contracts/common.md#meaningful-documentation A short comment states what is written.
   */
  float(val: number): void {
    this.view.setFloat32(this.ptr, val, true);
    this.ptr += 4;
  }

  /**
   * Write a 64-bit float in little-endian order.
   *
   * @evidence contracts/common.md#principled-implementation Eight little-endian bytes through the data view, advancing the pointer.
   * @evidence contracts/common.md#clear-and-simple-design One store.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The rule is the wire format's.
   * @evidence contracts/common.md#meaningful-documentation A short comment states what is written.
   */
  double(val: number): void {
    this.view.setFloat64(this.ptr, val, true);
    this.ptr += 8;
  }

  /**
   * Write the length prefix and the bytes.
   *
   * @evidence contracts/common.md#principled-implementation The byte length is written as an unsigned varint and the bytes are copied after it.
   * @evidence contracts/common.md#clear-and-simple-design One prefix write and one copy loop.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The rule is the wire format's.
   * @evidence contracts/common.md#meaningful-documentation A short comment states what is written.
   */
  bytes(value: Uint8Array): void {
    this.uint32(value.byteLength);
    for (let i = 0; i < value.byteLength; i++) this.buf[this.ptr++] = value[i]!;
  }

  /**
   * Write the recorded byte length and the UTF-8 bytes.
   *
   * @evidence contracts/common.md#principled-implementation The UTF-8 byte length that the sizer recorded is written as the prefix and the encoded bytes follow, so the length is not measured twice and always matches the bytes if the same string is written as was sized.
   * @evidence contracts/common.md#clear-and-simple-design One function using the recorded length and a shared encoder.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A different string than the one sized would corrupt the layout, which this class does not guard.
   * @evidence contracts/common.md#meaningful-documentation A short comment states what is written.
   */
  string(value: string): void {
    const len: number = this.varlen(); // use precomputed length
    this.uint32(len);

    const binary: Uint8Array = utf8.get().encode(value);
    for (let i = 0; i < binary.byteLength; i++)
      this.buf[this.ptr++] = binary[i]!;
  }

  /**
   * Write the recorded length of the message that follows.
   *
   * @evidence contracts/common.md#principled-implementation The next recorded length is read from the sizer and written as the prefix of the message that follows.
   * @evidence contracts/common.md#clear-and-simple-design One delegation to the length cursor.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The recorded lengths come from the sizer and are not recomputed.
   * @evidence contracts/common.md#meaningful-documentation A short comment states what is written.
   */
  fork(): void {
    this.uint32(this.varlen()); // use precomputed length
  }

  /**
   * Do nothing, because the sizer already recorded the length that `fork`
   * wrote.
   *
   * @evidence contracts/common.md#principled-implementation Nothing remains to be done at the end of a message, because the prefix was written by fork from the sizer's measurement.
   * @evidence contracts/common.md#clear-and-simple-design An empty method that keeps the writer interface symmetrical with the sizer.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The comment says the work is done by the sizer.
   * @evidence contracts/common.md#meaningful-documentation An inline comment states why it is empty.
   */
  ldelim(): void {
    // nothing to do - all dirty work done by sizer
  }

  /**
   * Return the filled buffer.
   *
   * @evidence contracts/common.md#principled-implementation Returns the filled buffer, which equals the measured length when the call order matched.
   * @evidence contracts/common.md#clear-and-simple-design One accessor.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts It returns the buffer without trimming or copying.
   * @evidence contracts/common.md#meaningful-documentation A short comment states what is returned.
   */
  finish(): Uint8Array {
    return this.buf;
  }

  /**
   * Allocate a new buffer of the sizer's current length and rewind the writer.
   *
   * @evidence contracts/common.md#principled-implementation A fresh buffer of the sizer's current length is allocated and the pointers rewound so the writer can be reused after the sizer was reset and refilled.
   * @evidence contracts/common.md#clear-and-simple-design Four assignments.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts No old buffer is retained.
   * @evidence contracts/common.md#meaningful-documentation A short comment states what is rebuilt.
   */
  reset(): void {
    this.buf = new Uint8Array(this.sizer.len);
    this.view = new DataView(this.buf.buffer);
    this.ptr = 0;
    this.varlenidx = 0;
  }

  private variant32(val: number): void {
    while (val > 0x7f) {
      this.buf[this.ptr++] = (val & 0x7f) | 0x80;
      val = val >>> 7;
    }
    this.buf[this.ptr++] = val;
  }

  private variant64(val: bigint): void {
    val = BigInt.asUintN(64, val);
    while (val > BigInt(0x7f)) {
      this.buf[this.ptr++] = Number((val & BigInt(0x7f)) | BigInt(0x80));
      val = val >> BigInt(0x07);
    }
    this.buf[this.ptr++] = Number(val);
  }

  private varlen(): number {
    return this.varlenidx >= this.sizer.varlen.length
      ? 0
      : this.sizer.varlen[this.varlenidx++]!;
  }
}
const utf8 = new Singleton(() => new TextEncoder());
