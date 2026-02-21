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
