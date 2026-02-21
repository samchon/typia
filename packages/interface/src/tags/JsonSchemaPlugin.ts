import { TagBase } from "./TagBase";

/**
 * Injects custom properties into generated JSON Schema.
 *
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
 */
export type JsonSchemaPlugin<Schema extends object> = TagBase<{
  target: "string" | "boolean" | "bigint" | "number" | "array" | "object";
  kind: "jsonPlugin";
  value: undefined;
  schema: Schema;
}>;
