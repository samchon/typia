import { TagBase } from "./TagBase";

/**
 * Array minimum items constraint.
 *
 * `MinItems<N>` validates that an array has at least N elements.
 *
 * @template Value Minimum number of items required
 * @author Jeongho Nam - https://github.com/samchon
 */
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
