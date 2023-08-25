import { TagBase } from "./TagBase";

export type Type<
    Target extends "int32" | "uint32" | "int64" | "uint64" | "float" | "double",
> = TagBase<{
    target: Target extends "int64" | "uint64" ? "bigint" : "number";
    kind: "type";
    value: Target;
    validate: Target extends "int32"
        ? `Number.isInteger($input) && -2147483648 <= $input && $input <= 2147483647`
        : Target extends "uint32"
        ? `Number.isInteger($input) && 0 <= $input && $input <= 4294967295`
        : Target extends "int64"
        ? {
              number: `Number.isInteger($input) && -9223372036854775808 <= $input && $input <= 9223372036854775807`;
              bigint: `true`;
          }
        : Target extends "uint64"
        ? {
              number: `Number.isInteger($input) && 0 <= $input && $input <= 18446744073709551615`;
              bigint: `BigInt(0) <= $input`;
          }
        : Target extends "float"
        ? `-1.175494351e38 <= $input <= 3.4028235e38`
        : `true`;
}>;
