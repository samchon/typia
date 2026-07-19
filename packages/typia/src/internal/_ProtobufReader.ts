import { ProtobufWire } from "@typia/interface";
import { Singleton } from "@typia/utils";

/// @reference https://github.com/piotr-oles/as-proto/blob/main/packages/as-proto/assembly/internal/FixedReader.ts
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

  public index(): number {
    return this.ptr;
  }

  public size(): number {
    return this.end;
  }

  public uint32(): number {
    return this.varint32() >>> 0;
  }

  public int32(): number {
    return this.varint32();
  }

  public sint32(): number {
    const value: number = this.varint32();
    return (value >>> 1) ^ -(value & 1);
  }

  public uint64(): bigint {
    return this.varint64();
  }

  public int64(): bigint {
    return BigInt.asIntN(64, this.varint64());
  }

  public sint64(): bigint {
    const value = this.varint64();
    return (value >> BigInt(0x01)) ^ -(value & BigInt(0x01));
  }

  public bool(): boolean {
    return this.varint32() !== 0;
  }

  public float(): number {
    return this.view.getFloat32(this.take(4), true);
  }

  public double(): number {
    return this.view.getFloat64(this.take(8), true);
  }

  public bytes(): Uint8Array {
    return this.atomic(() => {
      const length: number = this.uint32();
      const from: number = this.take(length);
      return this.buf.subarray(from, from + length);
    });
  }

  public string(): string {
    const bytes: Uint8Array = this.bytes();
    const decoder: TextDecoder = utf8.get();
    try {
      return decoder.decode(bytes);
    } catch {
      throw error("invalid UTF-8 string.");
    }
  }

  public fork(): number {
    return this.atomic(() => {
      const previous: number = this.end;
      const length: number = this.uint32();
      this.validate(length);
      this.end = this.ptr + length;
      return previous;
    });
  }

  public close(previous: number): void {
    if (this.ptr !== this.end) throw error("buffer overflow.");
    this.end = previous;
  }

  /** Advance by exactly `length` bytes, for every length including zero. */
  public skip(length: number): void {
    this.take(length);
  }

  /**
   * Advance by exactly one varint, which carries no length prefix.
   *
   * A varint terminates at its first byte without the continuation bit, and may
   * occupy no more than {@link VARINT_MAX_BYTES}. Reading past that limit would
   * accept a varint that `varint32` and `varint64` could not, making the limit
   * depend on which method happens to consume the value.
   */
  public skipVarint(): void {
    this.atomic(() => {
      for (let i: number = 1; i < VARINT_MAX_BYTES; ++i)
        if ((this.u8() & 0x80) === 0) return;
      this.lastVarintByte();
    });
  }

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

  /** Read the only byte whose varint payload is limited to bit 63. */
  private lastVarintByte(): number {
    const loaded: number = this.u8();
    if ((loaded & 0xfe) !== 0)
      throw error(`varint exceeds ${VARINT_MAX_BYTES} bytes.`);
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

const utf8 = new Singleton(
  () => new TextDecoder("utf-8", { fatal: true, ignoreBOM: true }),
);
