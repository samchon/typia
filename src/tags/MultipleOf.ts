import { TagBase } from "./TagBase";

export type MultipleOf<Value extends number | bigint> = TagBase<{
    target: Value extends bigint ? "bigint" : "number";
    kind: "multipleOf";
    value: Value;
    validate: `$input % ${Numeric<Value>} === ${Value extends bigint
        ? Numeric<0n>
        : 0}`;
    exclusive: true;
}>;

type Numeric<Value extends number | bigint> = Value extends number
    ? Value
    : `BigInt(${Value})`;
