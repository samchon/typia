import { TagBase } from "./TagBase";

export type ExclusiveMaximum<Fixed extends number | bigint> = TagBase<{
    target: Fixed extends number ? "number" : "bigint";
    kind: "exclusiveMaximum";
    value: Fixed;
    validate: `$input < ${Fixed}`;
}>;
