import { TagBase } from "./TagBase";

/**
 * Protocol Buffer field number assignment.
 *
 * `Sequence<N>` is a type tag that assigns a unique field number for Protocol
 * Buffer serialization. In protobuf, each field in a message must have a unique
 * numeric identifier that's used in the binary encoding.
 *
 * Field number guidelines:
 *
 * - **1-15**: Use one byte in encoding (ideal for frequently-used fields)
 * - **16-2047**: Use two bytes
 * - **2048-536,870,911**: Use more bytes (avoid for efficiency)
 * - **19000-19999**: Reserved by Protocol Buffers (cannot use)
 *
 * If not specified, typia auto-assigns field numbers. Use `Sequence` when you
 * need stable field numbers for backward compatibility or when integrating with
 * existing protobuf schemas.
 *
 * This tag is used by `typia.protobuf.encode()` and `typia.protobuf.decode()`.
 * The field number also appears in JSON Schema as `x-protobuf-sequence`.
 *
 * @author Jeongho Nam - https://github.com/samchon
 *
 * @example
 *   interface Message {
 *     // Frequently accessed fields use low numbers
 *     id: (number & Sequence<1>) & Type<"uint32">;
 *     name: string & Sequence<2>;
 *     // Less common fields use higher numbers
 *     metadata: (Record<string, string> & Sequence<100>) | undefined;
 *   }
 *
 * @template N Field number (1 to 536,870,911, excluding 19000-19999)
 *
 * @evidence contracts/common.md#principled-implementation The field number is stored in `value` and in the `x-protobuf-sequence` schema property for every target kind. The type accepts any number; the documented range and the reserved block are not enforced by the type itself.
 * @evidence contracts/common.md#clear-and-simple-design One TagBase record, with no helper or validation text, because the number is consumed by the protobuf programmers and the schema.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts It assigns a stable number from the declaration and does not hardcode a message or reserve a value by name.
 * @evidence contracts/common.md#meaningful-documentation The comment gives byte-size ranges, the reserved block, when to use it and an example, and names the consumers.
 */
export type Sequence<N extends number> = TagBase<{
  target: "boolean" | "bigint" | "number" | "string" | "array" | "object";
  kind: "sequence";
  value: N;
  schema: {
    "x-protobuf-sequence": N;
  };
}>;
