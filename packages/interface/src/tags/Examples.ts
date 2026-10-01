import { TagBase } from "./TagBase";

/**
 * Multiple named examples for JSON Schema documentation.
 *
 * `Examples<Record>` is a type tag that adds multiple labeled example values to
 * the generated JSON Schema. Each example has a name and a value, providing
 * rich documentation for different use cases or scenarios.
 *
 * This is useful when a property can have various valid values and you want to
 * illustrate multiple possibilities, such as different user types, edge cases,
 * or common configurations.
 *
 * The examples appear in the `examples` field of the JSON Schema and are
 * displayed by API documentation tools. For a single unnamed example, use
 * {@link Example} instead.
 *
 * @author Jeongho Nam - https://github.com/samchon
 *
 * @example
 *   interface Product {
 *     price: number &
 *       Examples<{
 *         budget: 9.99;
 *         premium: 99.99;
 *         enterprise: 999.99;
 *       }>;
 *     status: string &
 *       Examples<{
 *         active: "active";
 *         discontinued: "discontinued";
 *         preorder: "preorder";
 *       }>;
 *   }
 *
 * @template Value Record mapping example names to their values
 *
 * @evidence contracts/common.md#principled-implementation The record of names to values is copied unchanged to `schema.examples`, with each key being the example label; values are restricted to JSON-compatible kinds including null. The tag is exclusive because only one `examples` object can exist.
 * @evidence contracts/common.md#clear-and-simple-design One TagBase carrying the record; no conversion helper, so bigint values are accepted by the constraint but are not rewritten as they are in Example.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts Metadata only and no assertion that example values satisfy the annotated type.
 * @evidence contracts/common.md#meaningful-documentation The comment contrasts it with Example, explains when multiple examples help and shows string and number samples.
 */
export type Examples<
  Value extends Record<
    string,
    boolean | bigint | number | string | object | Array<unknown> | null
  >,
> = TagBase<{
  target: "boolean" | "bigint" | "number" | "string" | "array" | "object";
  kind: "examples";
  value: Value;
  exclusive: true;
  schema: {
    examples: Value;
  };
}>;
