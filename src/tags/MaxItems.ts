import { TagBase } from "./TagBase";

export type MaxItems<Value extends number> = TagBase<{
  target: "array";
  kind: "maxItems";
  value: Value;
  validate: `$input.length <= ${Value}`;
  exclusive: true;
  schema: {
    maxItems: Value;
  };
}>;
