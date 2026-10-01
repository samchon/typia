import { TagBase } from "./TagBase";

/**
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
 *
 * @example
 *   interface User {
 *     // Username must be at least 3 characters
 *     username: string & MinLength<3> & MaxLength<20>;
 *     // Password must be at least 8 characters
 *     password: string & MinLength<8>;
 *   }
 *
 * @template Value Minimum number of characters required
 *
 * @evidence contracts/common.md#principled-implementation The check calls `_stringLengthGte`, which counts code points and returns as soon as the minimum is reached, the unit JSON Schema `minLength` uses; `schema.minLength` carries the same number.
 * @evidence contracts/common.md#clear-and-simple-design One TagBase record, with counting kept in the runtime helper.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The helper counts every string the same way, and the template names no consumer.
 * @evidence contracts/common.md#meaningful-documentation The comment states the limit, the pairing with MaxLength and a username and password example; it says characters, which are code points in the runtime helper.
 */
export type MinLength<Value extends number> = TagBase<{
  target: "string";
  kind: "minLength";
  value: Value;
  validate: `$importInternal("_stringLengthGte")($input, ${Value})`;
  exclusive: true;
  schema: {
    minLength: Value;
  };
}>;
