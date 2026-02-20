import { TagBase } from "./TagBase";

/**
 * Numeric bit-width type constraint.
 *
 * `Type<Value>` constrains numbers to specific bit-width formats:
 * int32, uint32, int64, uint64, float, double.
 *
 * @template Value Numeric type representation
 * @author Jeongho Nam - https://github.com/samchon
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
