export type Type<
    Target extends
        | "int"
        | "uint"
        | "int32"
        | "uint32"
        | "int64"
        | "uint64"
        | "float",
> = {
    "typia.tag"?: {
        target: Target extends "uint64" ? "bigint" : "number" | "bigint";
        kind: "type";
        value: Target;
        validate: Target extends "int" | "int32"
            ? `Number.isInteger($input) && -2147483648 <= $input && $input <= 2147483647`
            : Target extends "uint" | "uint32"
            ? `Number.isInteger($input) && 0 <= $input && $input <= 4294967295`
            : Target extends "int64"
            ? {
                  number: `Number.isInteger($input) && -9223372036854775808 <= $input && $input <= 9223372036854775807`;
              }
            : Target extends "uint64"
            ? {
                  number: `Number.isInteger($input) && 0 <= $input && $input <= 18446744073709551615`;
                  bigint: `BigInt(0) <= $input && $input <= BigInt(18446744073709551615)`;
              }
            : `-1.175494351e38 <= $input <= 3.4028235e38`;
    };
};
