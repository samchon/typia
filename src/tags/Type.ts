import { TagBase } from "./TagBase";

export type Type<
    Value extends "int32" | "uint32" | "int64" | "uint64" | "float" | "double",
> = TagBase<{
    target: Value extends "int64" | "uint64" ? "bigint" | "number" : "number";
    kind: "type";
    value: Value;
    validate: Value extends "int32"
        ? `Math.floor($input) === $input && -2147483648 <= $input && $input <= 2147483647`
        : Value extends "uint32"
        ? `Math.floor($input) === $input && 0 <= $input && $input <= 4294967295`
        : Value extends "int64"
        ? {
              number: `Math.floor($input) === $input && -9223372036854775808 <= $input && $input <= 9223372036854775807`;
              bigint: `true`;
          }
        : Value extends "uint64"
        ? {
              number: `Math.floor($input) === $input && 0 <= $input && $input <= 18446744073709551615`;
              bigint: `BigInt(0) <= $input`;
          }
        : Value extends "float"
        ? `-1.175494351e38 <= $input && $input <= 3.4028235e38`
        : `true`;
    exclusive: true;
}>;
