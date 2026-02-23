import { TagBase } from "./TagBase";

/**
<<<<<<< HEAD
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
=======
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
 * @example
 *   interface Upload {
 *     // Maximum 5 files per upload
 *     files: (File & MaxItems<5>)[];
 *   }
 *   interface Config {
 *     // Between 1-3 backup servers allowed
 *     backupServers: (Server & MinItems<1> & MaxItems<3>)[];
 *   }
 *
 * @template Value Maximum number of elements allowed
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
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
