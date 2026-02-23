import { TagBase } from "./TagBase";

/**
<<<<<<< HEAD
 * Unique items validation tag for arrays.
 *
 * Enforces that all items in an array are unique, preventing duplicate values.
 * Uniqueness is determined using strict equality (===) for primitives and deep
 * structural comparison for objects and arrays. This means two objects with the
 * same properties and values are considered duplicates.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @example
 *   // Ensure all IDs are unique
 *   type UserIds = number[] & UniqueItems;
 *
 * @example
 *   // Prevent duplicate email addresses
 *   type EmailList = string[] & UniqueItems;
 *
 * @template Value - Boolean flag to enable/disable uniqueness validation
 *   (defaults to true)
=======
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
 * `typia.validate()`. It generates `uniqueItems: true` in JSON Schema.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @example
 *   interface Preferences {
 *     // No duplicate tags allowed
 *     tags: (string & UniqueItems)[];
 *     // Unique user IDs
 *     favoriteUserIds: (number & UniqueItems)[];
 *   }
 *
 * @template Value Boolean flag, defaults to `true` (enable constraint)
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
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
    uniqueItems: true;
  };
}>;
