import { TagBase } from "./TagBase";

/**
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
