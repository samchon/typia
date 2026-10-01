import { TagBase } from "./TagBase";

/**
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
 *
 * @example
 *   interface Article {
 *     // Title limited to 100 characters
 *     title: string & MaxLength<100>;
 *     // Description between 10-500 characters
 *     description: string & MinLength<10> & MaxLength<500>;
 *   }
 *
 * @template Value Maximum number of characters allowed
 *
 * @evidence contracts/common.md#principled-implementation The check calls the internal `_stringLengthLte` helper, which counts Unicode code points and stops once the bound is exceeded, the same unit JSON Schema `maxLength` uses; the same number is written to `schema.maxLength`. The tag is exclusive, so one upper bound applies per string.
 * @evidence contracts/common.md#clear-and-simple-design One TagBase record; length counting stays in the runtime helper instead of being spelled in the template.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The helper counts every string the same way, with no per-consumer length rule.
 * @evidence contracts/common.md#meaningful-documentation The comment states the limit and its pairing with MinLength; it says characters, which are code points in the runtime helper.
 */
export type MaxLength<Value extends number> = TagBase<{
  target: "string";
  kind: "maxLength";
  value: Value;
  validate: `$importInternal("_stringLengthLte")($input, ${Value})`;
  exclusive: true;
  schema: {
    maxLength: Value;
  };
}>;
