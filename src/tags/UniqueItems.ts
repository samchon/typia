import { TagBase } from "./TagBase";

export type UniqueItems<Value extends boolean = true> = TagBase<{
  target: "array";
  kind: "uniqueItems";
  value: Value;
  validate: Value extends true
    ? `$input.length <= 1 || ($input.length === new Set($input).size)`
    : undefined;
  exclusive: true;
  schema: {
    uniqueItems: true;
  };
}>;
