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
 *
 * @example
 *   interface Order {
 *     // Must have at least 1 item
 *     items: Product[] & MinItems<1>;
 *   }
 *   interface Team {
 *     // Team must have 2-10 members
 *     members: User[] & MinItems<2> & MaxItems<10>;
 *   }
 *
 * @template Value Minimum number of elements required
 *
 * @evidence contracts/common.md#principled-implementation The check is `N <= $input.length`, the definition of a lower bound on length, and `schema.minItems` repeats the number. The tag is exclusive, so one lower bound applies per array.
 * @evidence contracts/common.md#clear-and-simple-design One TagBase record, mirroring MaxItems.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts A general template with no consumer-specific expression.
 * @evidence contracts/common.md#meaningful-documentation The comment states the constraint, the pairing with MaxItems and UniqueItems and shows required and ranged arrays.
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
