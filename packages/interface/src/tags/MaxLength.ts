import { TagBase } from "./TagBase";

/**
<<<<<<< HEAD
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
=======
 * String maximum length constraint.
 *
 * `MaxLength<N>` is a type tag that validates string values have at most the
 * specified number of characters. Apply it to `string` properties using
 * TypeScript intersection types.
 *
 * This constraint is commonly combined with {@link MinLength} to define a valid
 * length range. Multiple length constraints can be applied to the same property
 * (all must pass).
 *
 * The constraint is enforced at runtime by `typia.is()`, `typia.assert()`, and
 * `typia.validate()`. It generates `maxLength` in JSON Schema output.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @example
 *   interface Article {
 *     // Title limited to 100 characters
 *     title: string & MaxLength<100>;
 *     // Description between 10-500 characters
 *     description: string & MinLength<10> & MaxLength<500>;
 *   }
 *
 * @template Value Maximum number of characters allowed
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
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
