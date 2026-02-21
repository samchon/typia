import { TagBase } from "./TagBase";

/**
 * Array unique items constraint.
 *
 * `UniqueItems` validates that all array elements are unique. Uses strict
 * equality for primitives, deep comparison for objects.
 *
 * @template Value Enable/disable flag (defaults to true)
 * @author Jeongho Nam - https://github.com/samchon
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
