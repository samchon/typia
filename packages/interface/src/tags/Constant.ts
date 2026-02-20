import { TagBase } from "./TagBase";

/**
 * Adds title and description metadata to literal types.
 *
 * `Constant` enhances literal values with documentation metadata that
 * appears in generated JSON Schema. Useful for enum-like values.
 *
 * @template Value Literal value (boolean, number, string, or bigint)
 * @template Content Metadata with optional title and description
 */
export type Constant<
  Value extends boolean | number | string | bigint,
  Content extends {
    title?: string | undefined;
    description?: string | undefined;
  },
> = Value &
  TagBase<{
    target: "string" | "boolean" | "number" | "bigint";
    kind: "constant";
    value: undefined;
    schema: Content;
  }>;
