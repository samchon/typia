import { TagBase } from "./TagBase";

export type MaxItems<Size extends number> = TagBase<{
    target: "array";
    kind: "maxItems";
    value: Size;
    validate: `$input.length <= ${Size}`;
}>;
