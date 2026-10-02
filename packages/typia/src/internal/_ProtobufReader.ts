import { ProtobufWire } from "@typia/interface";
import { Singleton } from "@typia/utils";

/// @reference https://github.com/piotr-oles/as-proto/blob/main/packages/as-proto/assembly/internal/FixedReader.ts
/**
 * Reads a Protocol Buffer message from a buffer.
 *
 * Every malformed input throws an error prefixed with
 * `typia.protobuf.decode()`. Length-prefixed bytes, message forks and field
 * skips restore their position on failure. Scalar varints may consume bytes
 * before failing, and invalid UTF-8 is reported after its byte range has been
 * consumed. Adapted from the fixed reader of as-proto.
 *
 * @evidence contracts/common.md#principled-implementation The reader decodes the wire format from a buffer with a pointer and a length-delimited boundary, throwing a typia-prefixed error for overflow, malformed varints or invalid UTF-8. Atomic bytes, fork and skip operations restore their pointer and boundary on failure; scalar varint reads can retain consumed bytes, and UTF-8 decoding can fail after bytes has completed. Varints are bounded to ten bytes with a tenth byte limited to bit 63 in every reading path, so skipping and reading agree on the wire limits.
 * @evidence contracts/common.md#clear-and-simple-design One class with public typed readers, skip methods and a message fork and close pair, and private varint readers and a bounds check shared by all of them; the fault builder and limits are module constants.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts Limits come from the wire format; invalid input throws and is never repaired by truncation or guessing.
 * @evidence contracts/common.md#meaningful-documentation A reference comment names the origin, the fields have comments and the skip and varint helpers explain their bounds.
 */
export class _ProtobufReader {
  /** Read buffer */
  private buf: Uint8Array;

  /** Read buffer pointer. */
  private ptr: number;

  /** DataView for buffer. */
  private view: DataView;

  /** Current length-delimited boundary. */
  private end: number;

  public constructor(buf: Uint8Array) {
    this.buf = buf;
    this.ptr = 0;
    this.view = new DataView(buf.buffer, buf.byteOffset, buf.byteLength);
    this.end = buf.length;
  }

  /**
   * Return the offset of the next byte to read.
   *
   * @evidence contracts/common.md#principled-implementation Returns the read pointer, which is the offset of the next byte to be read.
   * @evidence contracts/common.md#clear-and-simple-design One accessor.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts It exposes no mutable state.
   * @evidence contracts/common.md#meaningful-documentation A short comment states what is returned.
   */
  public index(): number {
    return this.ptr;
  }

  /**
   * Return the end of the buffer or of the open length-delimited message.
   *
   * @evidence contracts/common.md#principled-implementation Returns the current boundary, which is the end of the whole buffer or of the open length-delimited message.
   * @evidence contracts/common.md#clear-and-simple-design One accessor.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts It exposes no mutable state.
   * @evidence contracts/common.md#meaningful-documentation A short comment states what is returned.
   */
  public size(): number {
    return this.end;
  }

  /**
   * Read an unsigned 32-bit varint.
   *
   * @evidence contracts/common.md#principled-implementation Reads a varint and reinterprets it as an unsigned 32-bit number, so values of 2^31 or more are positive.
   * @evidence contracts/common.md#clear-and-simple-design One delegation with an unsigned shift.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The reading follows the wire format.
   * @evidence contracts/common.md#meaningful-documentation A short comment states what is read.
   */
  public uint32(): number {
    return this.varint32() >>> 0;
  }

  /**
   * Read a signed 32-bit varint.
   *
   * @evidence contracts/common.md#principled-implementation Reads a varint as a signed 32-bit number, which keeps the two's-complement meaning of a ten-byte negative value after truncation to 32 bits.
   * @evidence contracts/common.md#clear-and-simple-design One delegation.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The reading follows the wire format.
   * @evidence contracts/common.md#meaningful-documentation A short comment states what is read.
   */
  public int32(): number {
    return this.varint32();
  }

  /**
   * Read a ZigZag encoded signed 32-bit integer.
   *
   * @evidence contracts/common.md#principled-implementation The varint is decoded with the ZigZag inverse `(v >>> 1) ^ -(v & 1)`, where the unsigned shift treats the 32-bit pattern as unsigned.
   * @evidence contracts/common.md#clear-and-simple-design One expression over the varint reader.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The mapping is the protobuf definition.
   * @evidence contracts/common.md#meaningful-documentation A short comment states what is read.
   */
  public sint32(): number {
    const value: number = this.varint32();
    return (value >>> 1) ^ -(value & 1);
  }

  /**
   * Read an unsigned 64-bit varint.
   *
   * @evidence contracts/common.md#principled-implementation Reads a varint as an unsigned bigint, rejecting a payload above bit 63 or a varint longer than ten bytes.
   * @evidence contracts/common.md#clear-and-simple-design One delegation.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The bounds are the wire format's.
   * @evidence contracts/common.md#meaningful-documentation A short comment states what is read.
   */
  public uint64(): bigint {
    return this.varint64();
  }

  /**
   * Read a signed 64-bit varint.
   *
   * @evidence contracts/common.md#principled-implementation Reads the unsigned pattern and reinterprets it as a signed 64-bit bigint.
   * @evidence contracts/common.md#clear-and-simple-design One delegation with an integer cast.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The reading follows the wire format.
   * @evidence contracts/common.md#meaningful-documentation A short comment states what is read.
   */
  public int64(): bigint {
    return BigInt.asIntN(64, this.varint64());
  }

  /**
   * Read a ZigZag encoded signed 64-bit integer.
   *
   * @evidence contracts/common.md#principled-implementation The varint is decoded with the ZigZag inverse on a bigint.
   * @evidence contracts/common.md#clear-and-simple-design One expression over the 64-bit reader.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The mapping is the protobuf definition.
   * @evidence contracts/common.md#meaningful-documentation A short comment states what is read.
   */
  public sint64(): bigint {
    const value = this.varint64();
    return (value >> BigInt(0x01)) ^ -(value & BigInt(0x01));
  }

  /**
   * Read a boolean, which is true for any non-zero varint.
   *
   * @evidence contracts/common.md#principled-implementation A varint is true when it is not zero, as the format defines.
   * @evidence contracts/common.md#clear-and-simple-design One delegation.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The reading follows the wire format.
   * @evidence contracts/common.md#meaningful-documentation A short comment states what is read.
   */
  public bool(): boolean {
    return this.varint32() !== 0;
  }

  /**
   * Read a little-endian 32-bit float.
   *
   * @evidence contracts/common.md#principled-implementation Reads four little-endian bytes through the data view after a bounds check.
   * @evidence contracts/common.md#clear-and-simple-design One checked read.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The bounds check throws rather than reading past the boundary.
   * @evidence contracts/common.md#meaningful-documentation A short comment states what is read.
   */
  public float(): number {
    return this.view.getFloat32(this.take(4), true);
  }

  /**
   * Read a little-endian 64-bit float.
   *
   * @evidence contracts/common.md#principled-implementation Reads eight little-endian bytes through the data view after a bounds check.
   * @evidence contracts/common.md#clear-and-simple-design One checked read.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The bounds check throws rather than reading past the boundary.
   * @evidence contracts/common.md#meaningful-documentation A short comment states what is read.
   */
  public double(): number {
    return this.view.getFloat64(this.take(8), true);
  }

  /**
   * Read a length-prefixed byte range as a view into the buffer, without
   * copying.
   *
   * @evidence contracts/common.md#principled-implementation Reads a length-prefixed byte range as a view of the buffer and not a copy, inside an atomic block that restores the pointer if the length is invalid.
   * @evidence contracts/common.md#clear-and-simple-design One function using the checked read.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The returned view shares memory with the input buffer, a stated aliasing.
   * @evidence contracts/common.md#meaningful-documentation A short comment states what is read.
   */
  public bytes(): Uint8Array {
    return this.atomic(() => {
      const length: number = this.uint32();
      const from: number = this.take(length);
      return this.buf.subarray(from, from + length);
    });
  }

  /**
   * Read a length-prefixed UTF-8 string, throwing on invalid UTF-8 after
   * consuming its byte range. An invalid length restores the read position.
   *
   * @evidence contracts/common.md#principled-implementation Reads the bytes and decodes them with a decoder that is fatal on invalid UTF-8, so malformed text throws a typia error instead of producing replacement characters. A byte-range failure rolls back through bytes; a decoding failure occurs after that range has been consumed and does not rewind it.
   * @evidence contracts/common.md#clear-and-simple-design One function over bytes with a shared decoder.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The error is raised, not repaired.
   * @evidence contracts/common.md#meaningful-documentation A short comment states what is read.
   */
  public string(): string {
    const bytes: Uint8Array = this.bytes();
    const decoder: TextDecoder = utf8.get();
    try {
      return decoder.decode(bytes);
    } catch {
      throw error("invalid UTF-8 string.");
    }
  }

  /**
   * Begin a length-delimited message and return the previous boundary to pass
   * to `close`.
   *
   * @evidence contracts/common.md#principled-implementation Reads the length prefix, checks that it fits within the current boundary, narrows the boundary to the message end and returns the previous boundary for `close`; the pointer is restored on failure.
   * @evidence contracts/common.md#clear-and-simple-design One atomic function paired with close.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The bounds check throws on an oversized prefix.
   * @evidence contracts/common.md#meaningful-documentation A short comment states what is returned.
   */
  public fork(): number {
    return this.atomic(() => {
      const previous: number = this.end;
      const length: number = this.uint32();
      this.validate(length);
      this.end = this.ptr + length;
      return previous;
    });
  }

  /**
   * End the message that `fork` began, which must have been consumed
   * completely.
   *
   * @evidence contracts/common.md#principled-implementation Requires that the whole message was consumed and restores the previous boundary; an unread remainder is a malformed message and throws.
   * @evidence contracts/common.md#clear-and-simple-design One check and one assignment.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The strictness is intentional and reports corruption.
   * @evidence contracts/common.md#meaningful-documentation A short comment states the check.
   */
  public close(previous: number): void {
    if (this.ptr !== this.end) throw error("buffer overflow.");
    this.end = previous;
  }

  /**
   * Advance by exactly `length` bytes, for every length including zero.
   *
   * @evidence contracts/common.md#principled-implementation Advances exactly the given number of bytes after a bounds check, including zero, so a zero-length field is skipped without moving or failing.
   * @evidence contracts/common.md#clear-and-simple-design One checked advance.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The bounds check throws on overflow.
   * @evidence contracts/common.md#meaningful-documentation A short comment states the zero-length case.
   */
  public skip(length: number): void {
    this.take(length);
  }

  /**
   * Advance by exactly one varint, which carries no length prefix.
   *
   * A varint terminates at its first byte without the continuation bit, and may
   * occupy no more than {@link VARINT_MAX_BYTES}. Its tenth byte is bounded
   * twice over, by {@link lastVarintByte}: it may neither continue into an
   * eleventh byte nor carry payload above bit 63. Skipping is where that is
   * easiest to get wrong, because this path discards the bytes it reads and so
   * never notices a value it could not have represented. Relaxing either bound
   * here would accept a varint that `varint32` and `varint64` reject, making
   * the limit depend on which method happens to consume the value.
   *
   * @evidence contracts/common.md#principled-implementation Advances over one varint, which has no length prefix, using the same ten-byte and bit-63 limits as the value readers, so the limit does not depend on which method consumes the value.
   * @evidence contracts/common.md#clear-and-simple-design One atomic loop that delegates the last byte check to a shared helper.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The skipped bytes are validated, which is the point of the helper; no looser limit is used.
   * @evidence contracts/common.md#meaningful-documentation A long comment explains the bounds and why skipping must match reading.
   */
  public skipVarint(): void {
    this.atomic(() => {
      for (let i: number = 1; i < VARINT_MAX_BYTES; ++i)
        if ((this.u8() & 0x80) === 0) return;
      this.lastVarintByte();
    });
  }

  /**
   * Skip a field of the given wire type, including a nested group.
   *
   * @evidence contracts/common.md#principled-implementation A wire type selects how far to advance: a varint, eight bytes, a length-prefixed range, a group read until its end tag or four bytes; an unknown type throws with the offset. Group skipping recurses on nested types.
   * @evidence contracts/common.md#clear-and-simple-design One atomic function with a switch.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts Unknown wire types are an error and not skipped by guess.
   * @evidence contracts/common.md#meaningful-documentation A short comment states the supported wire types.
   */
  public skipType(wireType: ProtobufWire): void {
    this.atomic(() => {
      switch (wireType) {
        case ProtobufWire.VARIANT:
          this.skipVarint();
          break;
        case ProtobufWire.I64:
          this.skip(8);
          break;
        case ProtobufWire.LEN:
          this.skip(this.uint32());
          break;
        case ProtobufWire.START_GROUP:
          while ((wireType = this.uint32() & 0x07) !== ProtobufWire.END_GROUP)
            this.skipType(wireType);
          break;
        case ProtobufWire.I32:
          this.skip(4);
          break;
        default:
          throw error(`invalid wire type ${wireType} at offset ${this.ptr}.`);
      }
    });
  }

  private varint32(): number {
    let loaded: number;
    let value: number;

    value = (loaded = this.u8()) & 0x7f;
    if (loaded < 0x80) return value;

    value |= ((loaded = this.u8()) & 0x7f) << 7;
    if (loaded < 0x80) return value;

    value |= ((loaded = this.u8()) & 0x7f) << 14;
    if (loaded < 0x80) return value;

    value |= ((loaded = this.u8()) & 0x7f) << 21;
    if (loaded < 0x80) return value;

    value |= ((loaded = this.u8()) & 0xf) << 28;
    if (loaded < 0x80) return value;

    // increment position until there is no continuation bit, or until this read
    // reaches VARINT_MAX_BYTES and the value can hold no further bits
    if (this.u8() < 0x80) return value;
    if (this.u8() < 0x80) return value;
    if (this.u8() < 0x80) return value;
    if (this.u8() < 0x80) return value;
    this.lastVarintByte();
    return value;
  }

  private varint64(): bigint {
    let loaded: bigint;
    let value: bigint;

    value = (loaded = this.u8n()) & BigInt(0x7f);
    if (loaded < BigInt(0x80)) return value;

    value |= ((loaded = this.u8n()) & BigInt(0x7f)) << BigInt(7);
    if (loaded < BigInt(0x80)) return value;

    value |= ((loaded = this.u8n()) & BigInt(0x7f)) << BigInt(14);
    if (loaded < BigInt(0x80)) return value;

    value |= ((loaded = this.u8n()) & BigInt(0x7f)) << BigInt(21);
    if (loaded < BigInt(0x80)) return value;

    value |= ((loaded = this.u8n()) & BigInt(0x7f)) << BigInt(28);
    if (loaded < BigInt(0x80)) return value;

    value |= ((loaded = this.u8n()) & BigInt(0x7f)) << BigInt(35);
    if (loaded < BigInt(0x80)) return value;

    value |= ((loaded = this.u8n()) & BigInt(0x7f)) << BigInt(42);
    if (loaded < BigInt(0x80)) return value;

    value |= ((loaded = this.u8n()) & BigInt(0x7f)) << BigInt(49);
    if (loaded < BigInt(0x80)) return value;

    value |= ((loaded = this.u8n()) & BigInt(0x7f)) << BigInt(56);
    if (loaded < BigInt(0x80)) return value;

    value |= BigInt(this.lastVarintByte()) << BigInt(63);
    return BigInt.asUintN(64, value);
  }

  /**
   * Read the only byte whose varint payload is limited to bit 63.
   *
   * Two distinct faults meet on this byte, and each is named for what it is. A
   * continuation bit means the varint would occupy an eleventh byte, which no
   * 64-bit value can reach. Any other payload bit means the varint terminates
   * within its ten bytes but carries a value bit above 63. Reporting the second
   * as a length fault would tell the caller something untrue about a payload
   * that is exactly ten bytes long.
   */
  private lastVarintByte(): number {
    const loaded: number = this.u8();
    if ((loaded & 0x80) !== 0)
      throw error(`varint exceeds ${VARINT_MAX_BYTES} bytes.`);
    if (loaded > 0x01) throw error(`varint exceeds ${VARINT_MAX_BITS} bits.`);
    return loaded;
  }

  private u8(): number {
    return this.view.getUint8(this.take(1));
  }

  private u8n(): bigint {
    return BigInt(this.u8());
  }

  private take(length: number): number {
    this.validate(length);
    const from: number = this.ptr;
    this.ptr += length;
    return from;
  }

  private atomic<T>(closure: () => T): T {
    const index: number = this.ptr;
    const end: number = this.end;
    try {
      return closure();
    } catch (thrown) {
      this.ptr = index;
      this.end = end;
      throw thrown;
    }
  }

  private validate(length: number): void {
    if (
      Number.isSafeInteger(length) === false ||
      length < 0 ||
      length > this.size() - this.ptr
    )
      throw error("buffer overflow.");
  }
}

/**
 * Builds every fault this reader raises, so each one names typia as its source.
 *
 * Every decode error a caller can see must be attributable, and the prefix is
 * what attributes it. Composing it here rather than at each throw keeps a new
 * fault from silently shipping without it.
 */
const error = (message: string): Error =>
  new Error(`Error on typia.protobuf.decode(): ${message}`);

/**
 * The most bytes a varint may occupy: a 64-bit value in seven-bit groups.
 *
 * Every path reads no further than its tenth byte and accepts only bit 63 from
 * that byte. This constant keeps the loop-driven skip path on the same limit.
 */
const VARINT_MAX_BYTES = 10;

/**
 * The widest value a varint may carry: the 64-bit Protocol Buffer wire domain.
 *
 * The tenth byte reaches only bit 63, so a payload bit above it belongs to no
 * representable value. This names the overflow fault apart from the length
 * one.
 */
const VARINT_MAX_BITS = 64;

const utf8 = new Singleton(
  () => new TextDecoder("utf-8", { fatal: true, ignoreBOM: true }),
);
