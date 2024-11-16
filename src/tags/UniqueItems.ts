import { TagBase } from "./TagBase";

export type UniqueItems<Value extends boolean = true> = TagBase<{
  target: "array";
  kind: "uniqueItems";
  value: Value;
  validate: Value extends true
    ? `$importInternal("isUniqueItems")($input)`
    : undefined;
  exclusive: true;
  schema: {
    uniqueItems: true;
  };
}>;
