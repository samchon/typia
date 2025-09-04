import { TagBase } from "./TagBase";

/**
 * Minimum items validation tag for arrays.
 *
 * Enforces that an array contains at least the specified number of items. This
 * tag is useful for ensuring arrays have a minimum length requirement, such as
 * requiring at least one item in a list or a minimum number of selections in a
 * multi-choice field.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @example
 *   // Require at least 1 item in the array
 *   type Tags = string[] & MinItems<1>;
 *
 * @example
 *   // Require at least 3 selections
 *   type MultipleChoice = number[] & MinItems<3>;
 *
 * @template Value - The minimum number of items required
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
