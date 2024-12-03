import { TagBase } from "./TagBase";

export type Examples<
  Dict extends Record<
    string,
    boolean | bigint | number | string | object | Array<unknown> | null
  >,
> = TagBase<{
  target: "boolean" | "bigint" | "number" | "string" | "array" | "object";
  kind: "examples";
  value: Dict;
  exclusive: true;
  schema: {
    examples: Dict;
  };
}>;
