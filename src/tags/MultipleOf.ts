import { TagBase } from "./TagBase";

export type MultipleOf<Fixed extends number | bigint> = TagBase<{
    target: Fixed extends bigint ? "bigint" : "number";
    kind: "multipleOf";
    value: Fixed;
    validate: `$input % ${Fixed} === ${Fixed extends bigint ? 0n : 0}`;
}>;
