import { TagBase } from "./TagBase";

export type MinLength<Value extends number> = TagBase<{
  target: "string";
  kind: "minLength";
  value: Value;
  validate: `${Value} <= $input.length`;
  exclusive: true;
  schema: {
    minLength: Value;
  };
}>;
