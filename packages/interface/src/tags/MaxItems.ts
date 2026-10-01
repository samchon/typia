import { TagBase } from "./TagBase";

/**
 * Array maximum items constraint.
 *
 * `MaxItems<N>` is a type tag that validates array values have at most the
 * specified number of elements. Apply it to array properties using TypeScript
 * intersection types.
 *
 * This constraint is commonly combined with {@link MinItems} to define a valid
 * size range. It can also be combined with {@link UniqueItems} to require unique
 * elements.
 *
 * The constraint is enforced at runtime by `typia.is()`, `typia.assert()`, and
 * `typia.validate()`. It generates `maxItems` in JSON Schema output.
 *
 * @author Jeongho Nam - https://github.com/samchon
 *
 * @example
 *   interface Upload {
 *     // Maximum 5 files per upload
 *     files: File[] & MaxItems<5>;
 *   }
 *   interface Config {
 *     // Between 1-3 backup servers allowed
 *     backupServers: Server[] & MinItems<1> & MaxItems<3>;
 *   }
 *
 * @template Value Maximum number of elements allowed
 *
 * @evidence contracts/common.md#principled-implementation The generated check is `$input.length <= N`, which is the definition of an upper bound on array length, and `schema.maxItems` repeats the same number. The tag is exclusive, so one upper bound applies per array.
 * @evidence contracts/common.md#clear-and-simple-design One TagBase record parameterized by the bound, with no helper type.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The comparison is a general template over the bound, not a consumer-specific expression.
 * @evidence contracts/common.md#meaningful-documentation The comment states the constraint, how it pairs with MinItems and UniqueItems, where it is enforced and gives two array examples.
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
