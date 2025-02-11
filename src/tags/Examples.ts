import { TagBase } from "./TagBase";

export type Examples<
  Value extends Record<
    string,
    boolean | bigint | number | string | object | Array<unknown> | null
  >,
> = TagBase<{
  target: "boolean" | "bigint" | "number" | "string" | "array" | "object";
  kind: "examples";
  value: Value;
  exclusive: true;
  schema: {
    examples: Value;
  };
}>;
