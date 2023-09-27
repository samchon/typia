import { TagBase } from "./TagBase";

export type Default<Value extends boolean | bigint | number | string> =
    TagBase<{
        target: Value extends boolean
            ? "boolean"
            : Value extends bigint
            ? "bigint"
            : Value extends number
            ? "number"
            : "string";
        kind: "default";
        value: Value;
        exclusive: true;
    }>;
