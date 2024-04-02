import { TagBase } from "./TagBase";

export type ContentMediaType<Value extends string> = TagBase<{
  target: "string";
  kind: "contentMediaType";
  value: undefined;
  schema: {
    contentMediaType: Value;
  };
}>;
