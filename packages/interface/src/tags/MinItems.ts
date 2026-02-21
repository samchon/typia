import { TagBase } from "./TagBase";

/**
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
