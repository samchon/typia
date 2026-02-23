import type ts from "typescript";

<<<<<<< HEAD
export interface IMetadataTypeTag {
  target: "boolean" | "bigint" | "number" | "string" | "array" | "object";
  name: string;
  kind: string;
  exclusive: boolean | string[];
  value?: any;
  validate?: string | undefined;
=======
/**
 * Type constraint tag metadata.
 *
 * Represents constraint tags like `@minimum`, `@format`, `@pattern` that are
 * applied to types via typia's tag system. Used for validation and JSON schema
 * generation.
 *
 * @author Jeongho Nam - https://github.com/samchon
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
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
  schema?: object | undefined;

  /** @internal */
  predicate?: (input: ts.Expression) => ts.Expression;
}
