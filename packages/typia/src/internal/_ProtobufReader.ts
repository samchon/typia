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
      throw new Error(
        "Error on typia.protobuf.decode(): invalid UTF-8 string.",
      );
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
    if (this.ptr !== this.end)
      throw new Error("Error on typia.protobuf.decode(): buffer overflow.");
    this.end = previous;
  }

  /** Advance by exactly `length` bytes, for every length including zero. */
  public skip(length: number): void {
    this.take(length);
  }

  /** Advance by exactly one varint, which carries no length prefix. */
  public skipVarint(): void {
    this.atomic(() => {
      while (this.u8() & 0x80);
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
          throw new Error(
            `Invalid wire type ${wireType} at offset ${this.ptr}.`,
          );
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

    // increment position until there is no continuation bit or until we read 10 bytes
    if (this.u8() < 0x80) return value;
    if (this.u8() < 0x80) return value;
    if (this.u8() < 0x80) return value;
    if (this.u8() < 0x80) return value;
    if (this.u8() < 0x80) return value;

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

    value |= (this.u8n() & BigInt(0x01)) << BigInt(63);
    return BigInt.asUintN(64, value);
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
    } catch (error) {
      this.ptr = index;
      this.end = end;
      throw error;
    }
  }

  private validate(length: number): void {
    if (
      Number.isSafeInteger(length) === false ||
      length < 0 ||
      length > this.size() - this.ptr
    )
      throw new Error("Error on typia.protobuf.decode(): buffer overflow.");
  }
}

const utf8 = new Singleton(
  () => new TextDecoder("utf-8", { fatal: true, ignoreBOM: true }),
);
