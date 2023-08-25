import { TagBase } from "./TagBase";

export type Pattern<Value extends string> = TagBase<{
    target: "string";
    kind: "pattern";
    value: Value;
    validate: `RegExp(/${Value}/).test($input)`;
}>;
