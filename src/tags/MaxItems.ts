import { TagBase } from "./TagBase";

/**
 * Maximum items validation tag for arrays.
 *
 * Enforces that an array contains at most the specified number of items. This
 * tag is useful for limiting array sizes, such as restricting the number of
 * uploaded files, limiting selections in a form, or capping the size of
 * collections to prevent performance issues.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @example
 *   // Allow maximum 5 file uploads
 *   type FileList = File[] & MaxItems<5>;
 *
 * @example
 *   // Limit tags to 10 items
 *   type ProductTags = string[] & MaxItems<10>;
 *
 * @template Value - The maximum number of items allowed
 */
export type MaxItems<Value extends number> = TagBase<{
  target: "array";
  kind: "maxItems";
  value: Value;
  validate: `$input.length <= ${Value}`;
  exclusive: true;
  schema: {
    maxItems: Value;
  };
}>;
