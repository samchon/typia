import { TagBase } from "./TagBase";

/**
 * Array maximum items constraint.
 *
 * `MaxItems<N>` validates that an array has at most N elements.
 *
 * @template Value Maximum number of items allowed
 * @author Jeongho Nam - https://github.com/samchon
 */
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
