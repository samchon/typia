import { TagBase } from "./TagBase";

/**
 * Example value tag that provides a single example value for documentation.
 *
 * This tag adds an example value to your JSON Schema, which is useful for API
 * documentation, client code generation, and helping developers understand
 * expected data formats. The example doesn't affect runtime validation.
 *
 * Use Example for a single representative value. For multiple named examples,
 * use the Examples tag instead.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @example
 *   ```typescript
 *   interface Product {
 *     name: string & Example<"iPhone 15 Pro">;
 *     price: number & Example<999.99>;
 *     inStock: boolean & Example<true>;
 *   }
 *   ```;
 *
 * @example
 *   ```typescript
 *   interface User {
 *     profile: {
 *       bio: string;
 *       tags: string[];
 *     } & Example<{ bio: "Software engineer", tags: ["typescript", "react"] }>;
 *   }
 *   ```;
 *
 * @template Value The example value (primitives, objects, arrays, or null)
 */
export type Example<
  Value extends
    | boolean
    | bigint
    | number
    | string
    | object
    | Array<unknown>
    | null,
> = TagBase<{
  target: "boolean" | "bigint" | "number" | "string" | "array" | "object";
  kind: "example";
  value: Value;
  exclusive: true;
  schema: Value extends bigint
    ? { example: Numeric<Value> }
    : { example: Value };
}>;

type Numeric<T extends bigint> = `${T}` extends `${infer N extends number}`
  ? N
  : never;
