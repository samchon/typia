import { TagBase } from "./TagBase";

export type Maximum<Fixed extends number | bigint> = TagBase<{
    target: Fixed extends number ? "number" : "bigint";
    kind: "maximum";
    value: Fixed;
    validate: `$input <= ${Fixed}`;
}>;
