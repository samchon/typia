import { TagBase } from "./TagBase";

/**
 * Array unique elements constraint.
 *
 * `UniqueItems` is a type tag that validates all elements in an array are
 * unique (no duplicates). Apply it to array properties using TypeScript
 * intersection types.
 *
 * Uniqueness is determined by:
 *
 * - **Primitives**: Strict equality (`===`)
 * - **Objects**: Deep structural comparison
 *
 * This constraint is commonly combined with {@link MinItems} and {@link MaxItems}
 * for comprehensive array validation. It's useful for modeling set-like data
 * that must be represented as arrays in JSON.
 *
 * The constraint is enforced at runtime by `typia.is()`, `typia.assert()`, and
 * `typia.validate()`. `UniqueItems<false>` disables the runtime constraint;
 * JSON Schema's `uniqueItems` carries the same boolean flag.
 *
 * @author Jeongho Nam - https://github.com/samchon
 *
 * @example
 *   interface Preferences {
 *     // No duplicate tags allowed
 *     tags: string[] & UniqueItems;
 *     // Unique user IDs
 *     favoriteUserIds: number[] & UniqueItems;
 *   }
 *
 * @template Value Boolean flag, defaults to `true` (enable constraint)
 *
 * @evidence contracts/common.md#principled-implementation The true flag emits the internal isUniqueItems predicate, which compares primitive values by strict equality and objects structurally. The false flag has no validate expression and writes uniqueItems:false, aligning schema and runtime meanings; the default true writes uniqueItems:true. The schema field is parameterized by the same Value as the runtime branch rather than imposing a separate constraint.
 * @evidence contracts/common.md#clear-and-simple-design One TagBase record with one conditional for the flag; the comparison algorithm stays in the runtime helper.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The constraint is general over element types and mentions no consumer.
 * @evidence contracts/common.md#meaningful-documentation The comment explains the equality rule for primitives and objects, the typical combination with MinItems and MaxItems and shows two array examples.
 */
export type UniqueItems<Value extends boolean = true> = TagBase<{
  target: "array";
  kind: "uniqueItems";
  value: Value;
  validate: Value extends true
    ? `$importInternal("isUniqueItems")($input)`
    : undefined;
  exclusive: true;
  schema: {
    uniqueItems: Value;
  };
}>;
