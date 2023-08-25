import { TagBase } from "./TagBase";

export type MinLength<Fixed extends number> = TagBase<{
    target: "array";
    kind: "minLength";
    value: number;
    validate: `${Fixed} <= $input.length`;
}>;
