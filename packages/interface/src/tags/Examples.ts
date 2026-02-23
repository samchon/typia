import { TagBase } from "./TagBase";

/**
<<<<<<< HEAD
 * Multiple examples tag that provides named example values for documentation.
 *
 * Unlike the Example tag which provides a single example, Examples allows you
 * to provide multiple labeled examples. This is particularly useful when you
 * want to show different scenarios or use cases for the same type.
 *
 * The examples are added to JSON Schema as an object where keys are descriptive
 * names and values are the example data. This helps in API documentation and
 * test case generation.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @example
 *   ```typescript
 *   interface PaymentRequest {
 *     amount: number & Examples<{
 *       small: 10.50,
 *       medium: 99.99,
 *       large: 1000.00
 *     }>;
 *   }
 *   ```;
 *
 * @example
 *   ```typescript
 *   interface UserStatus {
 *     state: string & Examples<{
 *       active: "active",
 *       inactive: "inactive",
 *       suspended: "suspended"
 *     }>;
 *     profile: object & Examples<{
 *       basic: { name: "John", age: 25 },
 *       detailed: { name: "Jane", age: 30, bio: "Developer", verified: true }
 *     }>;
 *   }
 *   ```;
 *
 * @template Value A record object mapping example names to example values
=======
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
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
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
