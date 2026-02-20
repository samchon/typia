import { TagBase } from "./TagBase";

/**
 * Injects custom properties into generated JSON Schema.
 *
 * `JsonSchemaPlugin<Schema>` adds vendor extensions or custom metadata
 * (e.g., `x-*` properties) to the schema output. Does not affect validation.
 *
 * @template Schema Object with custom properties to merge
 */
export type JsonSchemaPlugin<Schema extends object> = TagBase<{
  target: "string" | "boolean" | "bigint" | "number" | "array" | "object";
  kind: "jsonPlugin";
  value: undefined;
  schema: Schema;
}>;
