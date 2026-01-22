import { TagBase } from "./TagBase";

/**
 * String maximum length constraint tag.
 *
 * Validates that a string's length is less than or equal to the specified
 * value. This tag enforces an upper limit on the number of characters in a
 * string.
 *
 * Examples: type ShortComment = string & MaxLength<200>; // Comment limited to
 * 200 characters type ZipCode = string & MaxLength<10>; // Zip code with max 10
 * characters
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export type MaxLength<Value extends number> = TagBase<{
  target: "string";
  kind: "maxLength";
  value: Value;
  validate: `$input.length <= ${Value}`;
  exclusive: true;
  schema: {
    maxLength: Value;
  };
}>;
