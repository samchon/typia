import { _IProtobufWriter } from "./_IProtobufWriter";

/// @reference https://github.com/piotr-oles/as-proto/blob/main/packages/as-proto/assembly/internal/FixedSizer.ts
export class _ProtobufSizer implements _IProtobufWriter {
  /**
   * Total length.
   */
  public len: number;

  /**
   * Position stack.
   */
  public readonly pos: Array<number>;

  /**
   * Variable length list.
   */
  public readonly varlen: Array<number>;

  /**
   * Variable length index stack.
   */
  public readonly varlenidx: Array<number>;

  public constructor(length: number = 0) {
    this.len = length;
    this.pos = [];
    this.varlen = [];
    this.varlenidx = [];
  }

  public bool(): void {
    this.len += 1;
  }
  public int32(value: number): void {
    if (value < 0) {
      // 10 bytes to encode negative number
      this.len += 10;
    } else {
      this.varint32(value);
    }
  }
  public sint32(value: number): void {
    this.varint32((value << 1) ^ (value >> 31));
  }
  public uint32(value: number): void {
    this.varint32(value);
  }

  public int64(value: bigint | number): void {
    this.varint64(typeof value === "number" ? BigInt(value) : value);
  }
  public sint64(value: bigint | number): void {
    if (typeof value === "number") value = BigInt(value);
    this.varint64((value << BigInt(1)) ^ (value >> BigInt(63)));
  }
  public uint64(value: bigint | number): void {
    this.varint64(typeof value === "number" ? BigInt(value) : value);
  }

  // public fixed32(_value: number): void {
  //     this.len += 4;
  // }
  // public sfixed32(_value: number): void {
  //     this.len += 4;
  // }
  // public fixed64(_value: number | bigint): void {
  //     this.len += 8;
  // }
  // public sfixed64(_value: number | bigint): void {
  //     this.len += 8;
  // }
  public float(_value: number): void {
    this.len += 4;
  }
  public double(_value: number): void {
    this.len += 8;
  }

  public bytes(value: Uint8Array): void {
    this.uint32(value.byteLength);
    this.len += value.byteLength;
  }
  public string(value: string): void {
    const len: number = strlen(value);
    this.varlen.push(len);
    this.uint32(len);
    this.len += len;
  }

  public fork(): void {
    this.pos.push(this.len); // save current position
    this.varlenidx.push(this.varlen.length); // save current index in varlen array
    this.varlen.push(0); // add 0 length to varlen array (to be updated in ldelim())
  }

  public ldelim(): void {
    if (!(this.pos.length && this.varlenidx.length))
      throw new Error(
        "Error on typia.protobuf.encode(): missing fork() before ldelim() call.",
      );

    const endPos = this.len; // current position is end position
    const startPos = this.pos.pop()!; // get start position from stack
    const idx = this.varlenidx.pop()!; // get varlen index from stack
    const len = endPos - startPos; // calculate length

    this.varlen[idx] = len; // update variable length
    this.uint32(len); // add uint32 that should be called in fork()
  }

  public reset(): void {
    this.len = 0;
    // re-use arrays
    this.pos.length = 0;
    this.varlen.length = 0;
    this.varlenidx.length = 0;
  }

  private varint32(value: number): void {
    this.len +=
      value < 0
        ? 10 // 10 bits with leading 1's
        : value < 0x80
          ? 1
          : value < 0x4000
            ? 2
            : value < 0x200000
              ? 3
              : value < 0x10000000
                ? 4
                : 5;
  }

  private varint64(val: bigint): void {
    val = BigInt.asUintN(64, val);
    while (val > BigInt(0x7f)) {
      ++this.len;
      val = val >> BigInt(0x07);
    }
    ++this.len;
  }
}

const strlen = (str: string): number => new Blob([str]).size;
