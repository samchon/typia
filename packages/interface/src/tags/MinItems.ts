import { TagBase } from "./TagBase";

/**
<<<<<<< HEAD
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
=======
 * Array minimum items constraint.
 *
 * `MinItems<N>` is a type tag that validates array values have at least the
 * specified number of elements. Apply it to array properties using TypeScript
 * intersection types.
 *
 * This constraint is commonly combined with {@link MaxItems} to define a valid
 * size range. It can also be combined with {@link UniqueItems} to require unique
 * elements.
 *
 * The constraint is enforced at runtime by `typia.is()`, `typia.assert()`, and
 * `typia.validate()`. It generates `minItems` in JSON Schema output.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @example
 *   interface Order {
 *     // Must have at least 1 item
 *     items: (Product & MinItems<1>)[];
 *   }
 *   interface Team {
 *     // Team must have 2-10 members
 *     members: (User & MinItems<2> & MaxItems<10>)[];
 *   }
 *
 * @template Value Minimum number of elements required
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
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
