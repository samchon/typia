import { Singleton } from "../utils/Singleton";

import { $ProtobufSizer } from "./$ProtobufSizer";
import { IProtobufWriter } from "./IProtobufWriter";

/// @reference https://github.com/piotr-oles/as-proto/blob/main/packages/as-proto/assembly/internal/FixedWriter.ts
export class $ProtobufWriter implements IProtobufWriter {
  /**
   * Related sizer
   */
  private readonly sizer: $ProtobufSizer;

  /**
   * Current pointer.
   */
  private ptr: number;

  /**
   * Protobuf buffer.
   */
  private buf: Uint8Array;

  /**
   * DataView for buffer.
   */
  private view: DataView;

  /**
   * Index in varlen array from sizer.
   */
  private varlenidx: number;

  constructor(sizer: $ProtobufSizer) {
    this.sizer = sizer;
    this.buf = new Uint8Array(sizer.len);
    this.view = new DataView(this.buf.buffer);
    this.ptr = 0;
    this.varlenidx = 0;
  }

  buffer(): Uint8Array {
    return this.buf;
  }

  bool(value: boolean): void {
    this.byte(value ? 1 : 0);
  }

  byte(value: number): void {
    this.buf[this.ptr++] = value & 255;
  }

  int32(value: number): void {
    if (value < 0) this.int64(value);
    else this.variant32(value >>> 0);
  }

  sint32(value: number): void {
    this.variant32((value << 1) ^ (value >> 31));
  }

  uint32(value: number): void {
    this.variant32(value);
  }

  sint64(value: number | bigint): void {
    value = BigInt(value);
    this.variant64((value << BigInt(0x01)) ^ (value >> BigInt(0x3f)));
  }

  int64(value: number | bigint): void {
    this.variant64(BigInt(value));
  }

  uint64(value: number | bigint): void {
    this.variant64(BigInt(value));
  }

  float(val: number): void {
    this.view.setFloat32(this.ptr, val, true);
    this.ptr += 4;
  }

  double(val: number): void {
    this.view.setFloat64(this.ptr, val, true);
    this.ptr += 8;
  }

  bytes(value: Uint8Array): void {
    this.uint32(value.byteLength);
    for (let i = 0; i < value.byteLength; i++) this.buf[this.ptr++] = value[i]!;
  }

  string(value: string): void {
    const len: number = this.varlen(); // use precomputed length
    this.uint32(len);

    const binary: Uint8Array = utf8.get().encode(value);
    for (let i = 0; i < binary.byteLength; i++)
      this.buf[this.ptr++] = binary[i]!;
  }

  fork(): void {
    this.uint32(this.varlen()); // use precomputed length
  }

  ldelim(): void {
    // nothing to do - all dirty work done by sizer
  }

  finish(): Uint8Array {
    return this.buf;
  }

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
const utf8 = /** @__PURE__ */ new Singleton(() => new TextEncoder());
