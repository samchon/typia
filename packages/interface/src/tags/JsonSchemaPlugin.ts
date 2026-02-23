import { TagBase } from "./TagBase";

/**
 * Injects custom properties into generated JSON Schema.
 *
<<<<<<< HEAD
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
=======
 * `JsonSchemaPlugin<Schema>` is a type tag that merges custom properties into
 * the generated JSON Schema output. This enables vendor extensions (typically
 * prefixed with `x-`) and custom metadata that tools in your ecosystem may
 * require.
 *
 * This is metadata-only - it does not affect runtime validation. The properties
 * are simply merged into the schema for the annotated type.
 *
 * Common use cases:
 *
 * - OpenAPI vendor extensions (`x-*` properties)
 * - Custom UI hints for form generators
 * - Tool-specific metadata
 * - Integration with third-party schema consumers
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @example
 *   interface FormField {
 *     // Add custom UI hints for form generation
 *     email: string &
 *       Format<"email"> &
 *       JsonSchemaPlugin<{
 *         "x-ui-widget": "email-input";
 *         "x-ui-placeholder": "Enter your email";
 *       }>;
 *     // Add custom sorting metadata
 *     priority: number &
 *       JsonSchemaPlugin<{
 *         "x-sort-order": "descending";
 *       }>;
 *   }
 *
 * @template Schema Object type containing the custom properties to merge
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 */
export type JsonSchemaPlugin<Schema extends object> = TagBase<{
  target: "string" | "boolean" | "bigint" | "number" | "array" | "object";
  kind: "jsonPlugin";
  value: undefined;
  schema: Schema;
}>;
