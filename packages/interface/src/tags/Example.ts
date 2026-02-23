import { TagBase } from "./TagBase";

/**
<<<<<<< HEAD
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
=======
 * Single example value for JSON Schema documentation.
 *
 * `Example<Value>` is a type tag that adds a representative example value to
 * the generated JSON Schema. This is metadata-only - it appears in the
 * `example` field of the schema and helps API consumers understand expected
 * values.
 *
 * Examples are displayed in API documentation tools like Swagger UI and can be
 * used by code generators to produce more helpful client code.
 *
 * Supports all JSON-compatible types: primitives, objects, arrays, and null.
 * For multiple named examples, use {@link Examples} instead.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @example
 *   interface User {
 *     email: string & Format<"email"> & Example<"user@example.com">;
 *     age: number & Minimum<0> & Example<25>;
 *     tags: string[] & Example<["admin", "active"]>;
 *   }
 *
 * @template Value The example value (any JSON-compatible type)
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
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
