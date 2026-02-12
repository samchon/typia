import { TagBase } from "./TagBase";

/**
 * Injects custom properties into generated JSON Schema.
 *
 * The JsonSchemaPlugin tag allows you to add vendor-specific extensions or
 * custom metadata to the generated JSON Schema output. These properties are
 * merged at the root level of the schema and are commonly used for
 * documentation, tooling hints, or API-specific metadata. The custom properties
 * only affect schema generation and do not impact runtime validation.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @example
 *   ```typescript
 *   // Add OpenAPI vendor extensions
 *   type UserId = string & JsonSchemaPlugin<{
 *     "x-internal-id": true,
 *     "x-deprecated": "Use UUID instead"
 *   }>;
 *
 *   // Add custom documentation metadata
 *   type Price = number & JsonSchemaPlugin<{
 *     "x-format": "currency",
 *     "x-example": 19.99
 *   }>;
 *   ```
 *
 * @template Schema - Object containing custom properties to add to the JSON
 *   Schema
 */
export type JsonSchemaPlugin<Schema extends object> = TagBase<{
  target: "string" | "boolean" | "bigint" | "number" | "array" | "object";
  kind: "jsonPlugin";
  value: undefined;
  schema: Schema;
}>;
