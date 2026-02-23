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
 * - `"int32"`: Signed 32-bit integer (-2,147,483,648 to 2,147,483,647)
 * - `"uint32"`: Unsigned 32-bit integer (0 to 4,294,967,295)
 * - `"int64"`: Signed 64-bit integer (for `number` or `bigint`)
 * - `"uint64"`: Unsigned 64-bit integer (for `number` or `bigint`)
 * - `"float"`: 32-bit floating point
 * - `"double"`: 64-bit floating point (default JavaScript number)
 *
 * For Protocol Buffers, integer types also determine the wire encoding. The
 * constraint is enforced at runtime by `typia.is()`, `typia.assert()`, and
 * `typia.validate()`. It generates appropriate `type` in JSON Schema.
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
  Value extends "int32" | "uint32" | "int64" | "uint64" | "float" | "double",
> = TagBase<{
  target: Value extends "int64" | "uint64" ? "bigint" | "number" : "number";
  kind: "type";
  value: Value;
  validate: Value extends "int32"
    ? `$importInternal("isTypeInt32")($input)`
    : Value extends "uint32"
      ? `$importInternal("isTypeUint32")($input)`
      : Value extends "int64"
        ? {
            number: `$importInternal("isTypeInt64")($input)`;
            bigint: `true`;
          }
        : Value extends "uint64"
          ? {
              number: `$importInternal("isTypeUint64")($input)`;
              bigint: `BigInt(0) <= $input`;
            }
          : Value extends "float"
            ? `$importInternal("isTypeFloat")($input)`
            : `true`;
  exclusive: true;
  schema: Value extends "uint32" | "uint64"
    ? {
        type: "integer";
        minimum: 0;
      }
    : {
        type: Value extends "int32" | "uint32" | "int64" | "uint64"
          ? "integer"
          : "number";
      };
}>;
