import { TagBase } from "./TagBase";

/**
 * String maximum length constraint.
 *
 * `MaxLength<N>` validates that a string has at most N characters.
 *
 * @template Value Maximum character count
 */
export type MaxLength<Value extends number> = TagBase<{
  target: "string";
  kind: "maxLength";
  value: Value;
  validate: `$input.length <= ${Value}`;
  exclusive: true;
  schema: {
    maxLength: Value;
  };
}>;
