import { TagBase } from "./TagBase";

/**
 * Adds multiple named examples to JSON Schema.
 *
 * `Examples<Record>` provides labeled examples for documentation.
 * For a single example, use {@link Example} instead.
 *
 * @template Value Record mapping example names to values
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
