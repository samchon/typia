import { TagBase } from "./TagBase";

export type Examples<
  Dict extends Record<
    string,
    boolean | bigint | number | string | Array<unknown> | null
  >,
> = TagBase<{
  target: "boolean" | "bigint" | "number" | "string" | "array";
  kind: "examples";
  value: Dict;
  exclusive: true;
  schema: {
    examples: Dict;
  };
}>;
