import { TagBase } from "./TagBase";

export type ExclusiveMinimum<Fixed extends number | bigint> = TagBase<{
    target: Fixed extends number ? "number" : "bigint";
    kind: "exclusiveMinimum";
    value: Fixed;
    validate: `${Fixed} < $input`;
}>;
