import { TagBase } from "./TagBase";

export type UniqueItems<Value extends boolean = true> = TagBase<{
  target: "array";
  kind: "uniqueItems";
  value: Value;
  validate: `${Value} === ($input.length === 0 || $input.length === new Set($input).size)`;
  exclusive: true;
  schema: {
    uniqueItems: true;
  };
}>;
