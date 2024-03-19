import { TagBase } from "./TagBase";

export type MinItems<Value extends number> = TagBase<{
  target: "array";
  kind: "minItems";
  value: Value;
  validate: `${Value} <= $input.length`;
  exclusive: true;
  schema: {
    minItems: Value;
  };
}>;
