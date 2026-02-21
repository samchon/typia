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
