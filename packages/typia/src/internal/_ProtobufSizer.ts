import { _IProtobufWriter } from "./_IProtobufWriter";

/// @reference https://github.com/piotr-oles/as-proto/blob/main/packages/as-proto/assembly/internal/FixedSizer.ts
/**
 * Measures a Protocol Buffer message before it is written.
 *
 * It receives the same calls as {@link _ProtobufWriter}, counts the bytes and
 * records the byte length of every string and length-delimited message, which
 * the writer reads back in order. The writer then allocates exactly one
 * buffer.
 *
 * @evidence contracts/common.md#principled-implementation The sizer replays the encoder's calls to compute the exact byte length and, for each string or length-delimited message, the prefix lengths, which the writer then consumes in the same order, so the buffer is allocated once and filled without a growth step. Varint lengths follow from the value ranges, a negative int32 takes ten bytes and 64-bit values are measured after reduction to an unsigned 64-bit pattern.
 * @evidence contracts/common.md#clear-and-simple-design One class holding the total length, a position stack for open messages and the list of recorded lengths; its private varint measurers are shared by the scalar methods.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The size rules are the protobuf wire format's, with no caller special-cased. An ldelim call without an open fork throws; callers must finish any forks they open.
 * @evidence contracts/common.md#meaningful-documentation A comment explains the two-pass role with the writer, and the fields have comments.
 */
export class _ProtobufSizer implements _IProtobufWriter {
  /** Total measured byte length, including length prefixes. */
  public len: number;

  /** Byte positions at which still-open messages started. */
  public readonly pos: Array<number>;

  /** String and message byte lengths in the writer's consumption order. */
  public readonly varlen: Array<number>;

  /** Reserved length-list indices for still-open messages. */
  public readonly varlenidx: Array<number>;

  /** Start measuring from an optional existing byte count. */
  public constructor(length: number = 0) {
    this.len = length;
    this.pos = [];
    this.varlen = [];
    this.varlenidx = [];
  }

  /**
   * Count one byte.
   *
   * @evidence contracts/common.md#principled-implementation A boolean always takes one byte.
   * @evidence contracts/common.md#clear-and-simple-design One increment.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A fixed wire size.
   * @evidence contracts/common.md#meaningful-documentation A one-line comment states what is counted.
   */
  public bool(): void {
    this.len += 1;
  }
  /**
   * Count the varint of a signed 32-bit integer, which is ten bytes when
   * negative.
   *
   * @evidence contracts/common.md#principled-implementation A negative value takes ten bytes because it is sign-extended to 64 bits, otherwise the varint length of the value is used.
   * @evidence contracts/common.md#clear-and-simple-design One branch over the shared measurer.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The rule is the wire format's.
   * @evidence contracts/common.md#meaningful-documentation A one-line comment states what is counted.
   */
  public int32(value: number): void {
    if (value < 0) {
      // 10 bytes to encode negative number
      this.len += 10;
    } else {
      this.varint32(value);
    }
  }
  /**
   * Count the varint of the unsigned ZigZag form of a signed 32-bit integer.
   *
   * @evidence contracts/common.md#principled-implementation The ZigZag mapping is taken as an unsigned 32-bit value before measuring, so magnitudes of 2^30 or more are measured as five bytes and not as a negative number; the writer applies the same mapping.
   * @evidence contracts/common.md#clear-and-simple-design One expression over the shared measurer.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The mapping is the protobuf definition and is not special-cased.
   * @evidence contracts/common.md#meaningful-documentation A comment states the unsigned mapping and the reason for it.
   */
  public sint32(value: number): void {
    // The ZigZag value is unsigned, so it never takes the negative-number length.
    this.varint32(((value << 1) ^ (value >> 31)) >>> 0);
  }
  /**
   * Count the varint of an unsigned 32-bit integer.
   *
   * @evidence contracts/common.md#principled-implementation The varint length of an unsigned 32-bit value, one to five bytes.
   * @evidence contracts/common.md#clear-and-simple-design One delegation.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The rule is the wire format's.
   * @evidence contracts/common.md#meaningful-documentation A one-line comment states what is counted.
   */
  public uint32(value: number): void {
    this.varint32(value);
  }

  /**
   * Count the varint of a signed 64-bit integer.
   *
   * @evidence contracts/common.md#principled-implementation A number is converted to a bigint and measured as an unsigned 64-bit pattern, which gives ten bytes for a negative value.
   * @evidence contracts/common.md#clear-and-simple-design One delegation to the 64-bit measurer.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The rule is the wire format's.
   * @evidence contracts/common.md#meaningful-documentation A one-line comment states what is counted.
   */
  public int64(value: bigint | number): void {
    this.varint64(typeof value === "number" ? BigInt(value) : value);
  }
  /**
   * Count the varint of the ZigZag form of a signed 64-bit integer.
   *
   * @evidence contracts/common.md#principled-implementation The ZigZag mapping on a bigint, `(n << 1) ^ (n >> 63)`, is measured as an unsigned 64-bit pattern.
   * @evidence contracts/common.md#clear-and-simple-design One expression over the 64-bit measurer.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The mapping is the protobuf definition.
   * @evidence contracts/common.md#meaningful-documentation A one-line comment states what is counted.
   */
  public sint64(value: bigint | number): void {
    if (typeof value === "number") value = BigInt(value);
    this.varint64((value << BigInt(1)) ^ (value >> BigInt(63)));
  }
  /**
   * Count the varint of an unsigned 64-bit integer.
   *
   * @evidence contracts/common.md#principled-implementation A number or bigint is measured as an unsigned 64-bit varint.
   * @evidence contracts/common.md#clear-and-simple-design One delegation to the 64-bit measurer.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The rule is the wire format's.
   * @evidence contracts/common.md#meaningful-documentation A one-line comment states what is counted.
   */
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
  /**
   * Count four bytes.
   *
   * @evidence contracts/common.md#principled-implementation A float takes four bytes regardless of value.
   * @evidence contracts/common.md#clear-and-simple-design One increment.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A fixed wire size.
   * @evidence contracts/common.md#meaningful-documentation A one-line comment states what is counted.
   */
  public float(_value: number): void {
    this.len += 4;
  }
  /**
   * Count eight bytes.
   *
   * @evidence contracts/common.md#principled-implementation A double takes eight bytes regardless of value.
   * @evidence contracts/common.md#clear-and-simple-design One increment.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A fixed wire size.
   * @evidence contracts/common.md#meaningful-documentation A one-line comment states what is counted.
   */
  public double(_value: number): void {
    this.len += 8;
  }

  /**
   * Count the length prefix and the bytes.
   *
   * @evidence contracts/common.md#principled-implementation The length prefix is measured as an unsigned 32-bit varint and the byte length is added.
   * @evidence contracts/common.md#clear-and-simple-design Two increments.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The rule is the wire format's.
   * @evidence contracts/common.md#meaningful-documentation A one-line comment states what is counted.
   */
  public bytes(value: Uint8Array): void {
    this.uint32(value.byteLength);
    this.len += value.byteLength;
  }
  /**
   * Count the length prefix and the UTF-8 bytes, and record the byte length for
   * the writer.
   *
   * @evidence contracts/common.md#principled-implementation The UTF-8 byte length is measured by encoding through a Blob, recorded in the length list so the writer reuses it and not recomputes it, and added with its varint prefix.
   * @evidence contracts/common.md#clear-and-simple-design One function using a module-level measuring helper.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The measure counts UTF-8 bytes and not code units.
   * @evidence contracts/common.md#meaningful-documentation A one-line comment states what is counted.
   */
  public string(value: string): void {
    const len: number = strlen(value);
    this.varlen.push(len);
    this.uint32(len);
    this.len += len;
  }

  /**
   * Save the position and reserve a length slot for a message that is starting.
   *
   * @evidence contracts/common.md#principled-implementation The current length and the length list's size are saved on stacks and a zero is reserved in the list, to be filled when the message ends.
   * @evidence contracts/common.md#clear-and-simple-design Three stack operations.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The bookkeeping is the two-pass design's.
   * @evidence contracts/common.md#meaningful-documentation A one-line comment states what is saved.
   */
  public fork(): void {
    this.pos.push(this.len); // save current position
    this.varlenidx.push(this.varlen.length); // save current index in varlen array
    this.varlen.push(0); // add 0 length to varlen array (to be updated in ldelim())
  }

  /**
   * Fill the reserved length slot with the size of the message that ends here,
   * and count its length prefix.
   *
   * @throws Error when no `fork` is open
   *
   * @evidence contracts/common.md#principled-implementation The length of the message since its fork is stored in the reserved list slot and its varint prefix is counted; an unmatched call throws a typed error instead of corrupting the stacks.
   * @evidence contracts/common.md#clear-and-simple-design One function paired with fork.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The unmatched case throws rather than being tolerated.
   * @evidence contracts/common.md#meaningful-documentation A one-line comment states what is recorded.
   */
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

  /**
   * Clear the counters and stacks so the sizer can measure another message.
   *
   * @evidence contracts/common.md#principled-implementation The counters and stacks are cleared in place, so the same sizer can measure another message without allocating new arrays.
   * @evidence contracts/common.md#clear-and-simple-design Four assignments.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts No hidden state is kept.
   * @evidence contracts/common.md#meaningful-documentation A one-line comment states that the arrays are reused.
   */
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
