import { TagBase } from "./TagBase";

export type MinItems<Size extends number> = TagBase<{
    target: "array";
    kind: "minItems";
    value: Size;
    validate: `${Size} <= $input.length`;
}>;
