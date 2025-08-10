import { TagBase } from "./TagBase";

/**
 * String minimum length constraint tag.
 *
 * Validates that a string's length is greater than or equal to the specified
 * value. This tag ensures that string values meet a minimum character count
 * requirement.
 *
 * Examples: type Username = string & MinLength<3>; // Username must be at least
 * 3 characters type Password = string & MinLength<8>; // Password must be at
 * least 8 characters
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export type MinLength<Value extends number> = TagBase<{
  target: "string";
  kind: "minLength";
  value: Value;
  validate: `${Value} <= $input.length`;
  exclusive: true;
  schema: {
    minLength: Value;
  };
}>;
