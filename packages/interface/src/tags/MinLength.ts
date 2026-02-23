import { TagBase } from "./TagBase";

/**
<<<<<<< HEAD
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
=======
 * String minimum length constraint.
 *
 * `MinLength<N>` is a type tag that validates string values have at least the
 * specified number of characters. Apply it to `string` properties using
 * TypeScript intersection types.
 *
 * This constraint is commonly combined with {@link MaxLength} to define a valid
 * length range. Multiple length constraints can be applied to the same property
 * (all must pass).
 *
 * The constraint is enforced at runtime by `typia.is()`, `typia.assert()`, and
 * `typia.validate()`. It generates `minLength` in JSON Schema output.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @example
 *   interface User {
 *     // Username must be at least 3 characters
 *     username: string & MinLength<3> & MaxLength<20>;
 *     // Password must be at least 8 characters
 *     password: string & MinLength<8>;
 *   }
 *
 * @template Value Minimum number of characters required
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
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
