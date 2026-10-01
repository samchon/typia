/**
 * Operations of a Protocol Buffer writer.
 *
 * Both {@link _ProtobufSizer} and {@link _ProtobufWriter} implement it, so one
 * generated encoder can first measure a message and then write it.
 *
 * @evidence contracts/common.md#principled-implementation The interface lists the primitive operations that the generated encoder calls on a writer, so one generated code path can drive both a sizer and a writer: scalars, bytes, strings and the fork and ldelim pair that delimit a length-prefixed message.
 * @evidence contracts/common.md#clear-and-simple-design One interface implemented by the sizer and the writer; scalars take number or bigint where the wire format needs 64 bits.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts A declaration only.
 * @evidence contracts/common.md#meaningful-documentation A comment states the role of the interface and that both implementations share it.
 */
export interface _IProtobufWriter {
  /**
   * Write a boolean as one byte.
   *
   * @evidence contracts/common.md#principled-implementation A boolean is written as one varint byte of zero or one.
   * @evidence contracts/common.md#clear-and-simple-design One member.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A declaration only.
   * @evidence contracts/common.md#meaningful-documentation A one-line comment states the member's role.
   */
  bool(value: boolean): void;
  /**
   * Write a signed 32-bit integer as a varint.
   *
   * @evidence contracts/common.md#principled-implementation A signed 32-bit integer in the two's-complement varint form, taking a number.
   * @evidence contracts/common.md#clear-and-simple-design One member.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A declaration only.
   * @evidence contracts/common.md#meaningful-documentation A one-line comment states the member's role.
   */
  int32(value: number): void;
  /**
   * Write a signed 32-bit integer in ZigZag form.
   *
   * @evidence contracts/common.md#principled-implementation A signed 32-bit integer in ZigZag form, so small magnitudes take few bytes.
   * @evidence contracts/common.md#clear-and-simple-design One member.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A declaration only.
   * @evidence contracts/common.md#meaningful-documentation A one-line comment states the member's role.
   */
  sint32(value: number): void;
  /**
   * Write an unsigned 32-bit integer as a varint.
   *
   * @evidence contracts/common.md#principled-implementation An unsigned 32-bit integer in varint form.
   * @evidence contracts/common.md#clear-and-simple-design One member.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A declaration only.
   * @evidence contracts/common.md#meaningful-documentation A one-line comment states the member's role.
   */
  uint32(value: number): void;

  /**
   * Write a signed 64-bit integer as a varint.
   *
   * @evidence contracts/common.md#principled-implementation A signed 64-bit integer in varint form, taking a bigint or a number so values above the safe integer range stay exact.
   * @evidence contracts/common.md#clear-and-simple-design One member.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A declaration only.
   * @evidence contracts/common.md#meaningful-documentation A one-line comment states the member's role.
   */
  int64(value: bigint | number): void;
  /**
   * Write a signed 64-bit integer in ZigZag form.
   *
   * @evidence contracts/common.md#principled-implementation A signed 64-bit integer in ZigZag form, taking a bigint or a number.
   * @evidence contracts/common.md#clear-and-simple-design One member.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A declaration only.
   * @evidence contracts/common.md#meaningful-documentation A one-line comment states the member's role.
   */
  sint64(value: bigint | number): void;
  /**
   * Write an unsigned 64-bit integer as a varint.
   *
   * @evidence contracts/common.md#principled-implementation An unsigned 64-bit integer in varint form, taking a bigint or a number.
   * @evidence contracts/common.md#clear-and-simple-design One member.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A declaration only.
   * @evidence contracts/common.md#meaningful-documentation A one-line comment states the member's role.
   */
  uint64(value: bigint | number): void;

  /**
   * Write a 32-bit float in little-endian order.
   *
   * @evidence contracts/common.md#principled-implementation A 32-bit float, written little-endian in four bytes.
   * @evidence contracts/common.md#clear-and-simple-design One member.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A declaration only.
   * @evidence contracts/common.md#meaningful-documentation A one-line comment states the member's role.
   */
  float(value: number): void;
  /**
   * Write a 64-bit float in little-endian order.
   *
   * @evidence contracts/common.md#principled-implementation A 64-bit float, written little-endian in eight bytes.
   * @evidence contracts/common.md#clear-and-simple-design One member.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A declaration only.
   * @evidence contracts/common.md#meaningful-documentation A one-line comment states the member's role.
   */
  double(value: number): void;
  /**
   * Write a byte array with its length prefix.
   *
   * @evidence contracts/common.md#principled-implementation A byte array with its length prefix.
   * @evidence contracts/common.md#clear-and-simple-design One member.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A declaration only.
   * @evidence contracts/common.md#meaningful-documentation A one-line comment states the member's role.
   */
  bytes(value: Uint8Array): void;
  /**
   * Write a UTF-8 string with its byte-length prefix.
   *
   * @evidence contracts/common.md#principled-implementation A string in UTF-8 with a byte-length prefix.
   * @evidence contracts/common.md#clear-and-simple-design One member.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A declaration only.
   * @evidence contracts/common.md#meaningful-documentation A one-line comment states the member's role.
   */
  string(value: string): void;

  /**
   * Begin a length-delimited message.
   *
   * @evidence contracts/common.md#principled-implementation Marks the start of a length-delimited message, whose length is known only after the body has been sized.
   * @evidence contracts/common.md#clear-and-simple-design One member paired with ldelim.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A declaration only.
   * @evidence contracts/common.md#meaningful-documentation A one-line comment states the member's role.
   */
  fork(): void;
  /**
   * End the message that the matching `fork` began.
   *
   * @evidence contracts/common.md#principled-implementation Marks the end of the message opened by the matching fork, where the sizer records the length and the writer has nothing left to do.
   * @evidence contracts/common.md#clear-and-simple-design One member paired with fork.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A declaration only.
   * @evidence contracts/common.md#meaningful-documentation A one-line comment states the member's role.
   */
  ldelim(): void;
}
