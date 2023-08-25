import { TagBase } from "./TagBase";

export type MaxLength<Fixed extends number> = TagBase<{
    target: "array";
    kind: "maxLength";
    value: number;
    validate: `$input.length <= ${Fixed}`;
}>;
