import { TagBase } from "./TagBase";

/**
<<<<<<< HEAD
 * Assigns unique field numbers for Protocol Buffer serialization.
 *
 * In Protocol Buffer encoding, each field in a message must have a unique
 * numeric identifier. The Sequence tag assigns these field numbers to
 * TypeScript properties, enabling proper Protocol Buffer serialization and
 * deserialization. Field numbers 1-15 require only one byte to encode, making
 * them ideal for frequently used fields. Numbers 19000-19999 are reserved by
 * the Protocol Buffer specification and should not be used.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @example
 *   ```typescript
 *   interface User {
 *     id: string & Sequence<1>;        // Most frequent field uses 1
 *     email: string & Sequence<2>;     // Common fields use low numbers
 *     createdAt: number & Sequence<3>;
 *     metadata?: object & Sequence<10>; // Optional fields work too
 *   }
 *
 *   // Generate Protocol Buffer message
 *   const message = typia.protobuf.message<User>();
 *   ```
 *
 * @template N - Field number (positive integer from 1 to 536,870,911, excluding
 *   19000-19999)
=======
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
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 */
export type Sequence<N extends number> = TagBase<{
  target: "boolean" | "bigint" | "number" | "string" | "array" | "object";
  kind: "sequence";
  value: N;
  schema: {
    "x-protobuf-sequence": N;
  };
}>;
