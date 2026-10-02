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
 *
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
 *
 * @evidence contracts/common.md#principled-implementation The caller's object type becomes the tag's `schema`, which the schema generator merges into the annotated type's JSON Schema; no validate text is present, so validation is unaffected. The constraint is only `object`, so the tag cannot prevent a property that collides with a standard keyword.
 * @evidence contracts/common.md#clear-and-simple-design A single TagBase over the caller's object, the smallest form that carries free-form extension properties.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts It supplies metadata through the supported tag channel and does not patch the generated schema by name or consumer.
 * @evidence contracts/common.md#meaningful-documentation The comment gives the vendor-extension purpose, the metadata-only effect, use cases and examples with two kinds of property.
 */
export type JsonSchemaPlugin<Schema extends object> = TagBase<{
  target: "string" | "boolean" | "bigint" | "number" | "array" | "object";
  kind: "jsonPlugin";
  value: undefined;
  schema: Schema;
}>;
