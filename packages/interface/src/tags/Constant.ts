import { TagBase } from "./TagBase";

/**
 * Documentation metadata for literal/constant values.
 *
 * `Constant<Value, Content>` enhances literal type values with human-readable
 * documentation that appears in generated JSON Schema output. This is useful
 * for enum-like values where each literal needs individual documentation.
 *
 * Unlike TypeScript enums which lose their documentation in schema generation,
 * `Constant` preserves title and description for each value. This helps API
 * consumers understand the meaning of each allowed value.
 *
 * The tag itself doesn't perform validation - it only adds metadata. The
 * literal type constraint is enforced by TypeScript's type system.
 *
 * @author Jeongho Nam - https://github.com/samchon
 *
 * @example
 *   type OrderStatus =
 *     | Constant<
 *         "pending",
 *         { title: "Pending"; description: "Order placed" }
 *       >
 *     | Constant<"shipped", { title: "Shipped"; description: "In transit" }>
 *     | Constant<
 *         "delivered",
 *         { title: "Delivered"; description: "Complete" }
 *       >;
 *
 *   interface Order {
 *     status: OrderStatus;
 *   }
 *
 * @template Value The literal value (boolean, number, string, or bigint)
 * @template Content Object with optional `title` and `description` properties
 *
 * @evidence contracts/common.md#principled-implementation The literal value is intersected with a TagBase whose kind is `constant` and whose `schema` carries the caller's title and description, so the value type is untouched and the metadata reaches the JSON Schema by the same tag channel as other constraints. The tag has no `validate` text, so no runtime check is emitted; membership comes from the literal type itself.
 * @evidence contracts/common.md#clear-and-simple-design A single intersection of Value and one TagBase record; Content is the only extra parameter, with no helper types.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The type contributes documentation metadata only and neither fabricates a validator nor special-cases a particular enum or consumer.
 * @evidence contracts/common.md#meaningful-documentation The comment explains the enum-documentation use, that no validation is performed and gives a complete OrderStatus example with both template parameters described.
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
