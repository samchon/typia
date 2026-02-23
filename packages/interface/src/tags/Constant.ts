import { TagBase } from "./TagBase";

/**
<<<<<<< HEAD
 * Constant tag that adds title and description metadata to literal types.
 *
 * This tag enhances literal values with human-readable documentation without
 * changing their runtime type. It's particularly useful for enum-like values
 * where you want to provide context about what each value represents.
 *
 * The metadata appears in generated JSON Schema, making API documentation more
 * descriptive and helping developers understand the meaning of specific
 * constant values.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @example
 *   ```typescript
 *   type Status =
 *     | Constant<"active", { title: "Active", description: "User is currently active" }>
 *     | Constant<"inactive", { title: "Inactive", description: "User account is disabled" }>
 *     | Constant<"pending", { title: "Pending", description: "Awaiting verification" }>;
 *   ```;
 *
 * @example
 *   ```typescript
 *   interface Config {
 *     debugLevel: Constant<0, { title: "Off", description: "No debug output" }>
 *               | Constant<1, { title: "Basic", description: "Basic logging" }>
 *               | Constant<2, { title: "Verbose", description: "Detailed debug info" }>;
 *   }
 *   ```;
 *
 * @template Value The literal value (boolean, number, string, or bigint)
 * @template Content Metadata with optional title and description
=======
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
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
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
