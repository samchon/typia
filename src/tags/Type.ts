import { TagBase } from "./TagBase";

/**
 * Type tag for specifying numeric bit-width representations.
 *
 * Constrains numeric types to specific bit-width formats used in systems
 * programming and protocol buffers. Ensures numbers conform to
 * platform-specific representations.
 *
 * Supported types:
 *
 * - `int32`: 32-bit signed integer (-2^31 to 2^31-1)
 * - `uint32`: 32-bit unsigned integer (0 to 2^32-1)
 * - `int64`: 64-bit signed integer (supports both bigint and number)
 * - `uint64`: 64-bit unsigned integer (supports both bigint and number)
 * - `float`: 32-bit floating point (single precision)
 * - `double`: 64-bit floating point (double precision, default JS number)
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @example
 *   ```typescript
 *   type Score = number & Type<"int32">;      // -2,147,483,648 to 2,147,483,647
 *   type UserId = number & Type<"uint32">;    // 0 to 4,294,967,295
 *   type FileSize = bigint & Type<"int64">;   // Large file sizes
 *   type Coordinate = number & Type<"double">; // High precision coordinates
 *   ```
 *
 * @template Value - The numeric type representation
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
