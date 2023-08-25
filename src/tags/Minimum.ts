import { TagBase } from "./TagBase";

export type Minimum<Fixed extends number | bigint> = TagBase<{
    target: Fixed extends number ? "number" : "bigint";
    kind: "minimum";
    value: Fixed;
    validate: `${Fixed} <= $input`;
}>;
