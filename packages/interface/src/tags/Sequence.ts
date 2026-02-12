import { TagBase } from "./TagBase";

/**
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
 */
export type Sequence<N extends number> = TagBase<{
  target: "boolean" | "bigint" | "number" | "string" | "array" | "object";
  kind: "sequence";
  value: N;
  schema: {
    "x-protobuf-sequence": N;
  };
}>;
