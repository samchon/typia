import { TagBase } from "./TagBase";

/**
 * String minimum length constraint.
 *
 * `MinLength<N>` validates that a string has at least N characters.
 *
 * @template Value Minimum character count
 */
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
