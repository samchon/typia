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
 * @example
 *   interface Article {
 *     // Title limited to 100 characters
 *     title: string & MaxLength<100>;
 *     // Description between 10-500 characters
 *     description: string & MinLength<10> & MaxLength<500>;
 *   }
 *
 * @template Value Maximum number of characters allowed
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
