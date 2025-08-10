import { TagBase } from "./TagBase";

/**
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
