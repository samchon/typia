/**
 * Type constraint tag metadata.
 *
 * Represents constraint tags like `@minimum`, `@format`, `@pattern` that are
 * applied to types via typia's tag system. Used for validation and JSON schema
 * generation.
 *
 * @author Jeongho Nam - https://github.com/samchon
 *
 * @evidence contracts/common.md#principled-implementation The record mirrors TagBase.IProps after the transform has read it: target, full tag name, kind, exclusivity, value, validate template and schema fragment, where optional fields stay optional because many tags have no value, validation or schema. `value` is `any` because its type depends on the tag kind.
 * @evidence contracts/common.md#clear-and-simple-design Seven fields with no helper; one record describes every tag kind.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts It reports the tag as declared and does not evaluate the validation template.
 * @evidence contracts/common.md#meaningful-documentation The comment says it is the metadata form of a constraint tag and each field has an example or meaning, including exclusivity.
 */
export interface IMetadataTypeTag {
  /** Target type this tag applies to. */
  target: "boolean" | "bigint" | "number" | "string" | "array" | "object";

  /** Full tag name (e.g., `"@typia/tag/Minimum"`). */
  name: string;

  /** Tag kind identifier (e.g., `"minimum"`, `"format"`). */
  kind: string;

  /**
   * Exclusivity: `true` for unique tags, or array of mutually exclusive tag
   * kinds.
   */
  exclusive: boolean | string[];

  /** Tag value (e.g., `0` for `Minimum<0>`, `"email"` for `Format<"email">`). */
  value?: any;

  /** Validation expression template. */
  validate?: string | undefined;

  /** JSON schema fragment to merge. */
  schema?: object | undefined;
}
