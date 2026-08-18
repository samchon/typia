import { TagBase } from "./TagBase";

/**
 * Numeric precision and bit-width type constraint.
 *
 * `Type<Value>` is a type tag that constrains numeric values to specific
 * bit-width representations. This is essential for Protocol Buffers
 * serialization and ensures values fit within their specified ranges.
 *
 * Available types:
 *
 * - `"int8"`: Signed 8-bit integer (-128 to 127)
 * - `"uint8"`: Unsigned 8-bit integer (0 to 255)
 * - `"int16"`: Signed 16-bit integer (-32,768 to 32,767)
 * - `"uint16"`: Unsigned 16-bit integer (0 to 65,535)
 * - `"int32"`: Signed 32-bit integer (-2,147,483,648 to 2,147,483,647)
 * - `"uint32"`: Unsigned 32-bit integer (0 to 4,294,967,295)
 * - `"int64"`: Signed 64-bit integer (for `number` or `bigint`)
 * - `"uint64"`: Unsigned 64-bit integer (for `number` or `bigint`)
 * - `"float"`: 32-bit floating point
 * - `"double"`: 64-bit floating point (default JavaScript number)
 *
 * For Protocol Buffers, numeric types select the protobuf scalar type, while
 * smaller integer tags validate narrower ranges and emit `int32` or `uint32`.
 * The constraint is enforced at runtime by `typia.is()`, `typia.assert()`, and
 * `typia.validate()`. It generates appropriate `type` in JSON Schema.
 *
 * On a `bigint`, `"int64"` accepts `-(2n ** 63n)` through `2n ** 63n - 1n` and
 * `"uint64"` accepts `0n` through `2n ** 64n - 1n`, both inclusive — exactly
 * the values `typia.protobuf.encode` writes into a 64-bit varint without
 * truncating them. Their `number` forms cannot be that exact: neither maximum
 * is representable, so each rounds up to the neighboring power of two and is
 * accepted, because that power is the only float form the true maximum has. Use
 * the `bigint` form when the boundary matters.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @example
 *   interface Message {
 *     // 32-bit unsigned integer
 *     id: number & Type<"uint32">;
 *     // 64-bit signed integer as bigint
 *     timestamp: bigint & Type<"int64">;
 *     // 32-bit float for memory efficiency
 *     score: number & Type<"float">;
 *   }
 *
 * @template Value Numeric type identifier
 */
export type Type<
  Value extends
    | "int8"
    | "uint8"
    | "int16"
    | "uint16"
    | "int32"
    | "uint32"
    | "int64"
    | "uint64"
    | "float"
    | "double",
> = TagBase<{
  target: Value extends "int64" | "uint64" ? "bigint" | "number" : "number";
  kind: "type";
  value: Value;
  validate: Value extends "int8"
    ? `$importInternal("isTypeInt8")($input)`
    : Value extends "uint8"
      ? `$importInternal("isTypeUint8")($input)`
      : Value extends "int16"
        ? `$importInternal("isTypeInt16")($input)`
        : Value extends "uint16"
          ? `$importInternal("isTypeUint16")($input)`
          : Value extends "int32"
            ? `$importInternal("isTypeInt32")($input)`
            : Value extends "uint32"
              ? `$importInternal("isTypeUint32")($input)`
              : Value extends "int64"
                ? {
                    number: `$importInternal("isTypeInt64")($input)`;
                    bigint: `$importInternal("isTypeInt64Bigint")($input)`;
                  }
                : Value extends "uint64"
                  ? {
                      number: `$importInternal("isTypeUint64")($input)`;
                      bigint: `$importInternal("isTypeUint64Bigint")($input)`;
                    }
                  : Value extends "float"
                    ? `$importInternal("isTypeFloat")($input)`
                    : `true`;
  exclusive: true;
  // This schema is deliberately coarser than the runtime Type check. It exposes
  // only the numeric shape and the existing non-negative marker for unsigned
  // integers, not the full bit-width as minimum/maximum. Random generation
  // consumes this schema and honors explicit range tags; it does not derive or
  // intersect this tag's runtime width. A wider declared range can therefore
  // produce a value that the Type validator rejects, and that is not a random
  // generator defect. JavaScript number precision also governs the int64 and
  // uint64 checks as written; do not invent alternate schema bounds to
  // compensate for it or add width bounds here as an attempted fix.
  schema: Value extends "uint8" | "uint16" | "uint32" | "uint64"
    ? {
        type: "integer";
        minimum: 0;
      }
    : {
        type: Value extends
          | "int8"
          | "uint8"
          | "int16"
          | "uint16"
          | "int32"
          | "uint32"
          | "int64"
          | "uint64"
          ? "integer"
          : "number";
      };
}>;
