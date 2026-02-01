import { TagBase } from "./TagBase";

/**
 * Default value tag that specifies a default value for properties.
 *
 * When a property is not provided during validation, this tag instructs typia
 * to use the specified default value. This is useful for optional properties
 * that should have a specific fallback value.
 *
 * Supported types: boolean, bigint, number, and string primitives. Note:
 * Default values are applied during validation, not at compile time.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @example
 *   ```typescript
 *   interface User {
 *     name: string;
 *     active: boolean & Default<true>;  // defaults to true if not provided
 *     retries: number & Default<3>;     // defaults to 3 if not provided
 *   }
 *   ```;
 *
 * @example
 *   ```typescript
 *   interface Config {
 *     timeout: bigint & Default<5000n>;    // defaults to 5000n
 *     prefix: string & Default<"user_">;   // defaults to "user_"
 *   }
 *   ```;
 *
 * @template Value The default value (boolean, bigint, number, or string)
 */
export type Default<Value extends boolean | bigint | number | string> =
  TagBase<{
    target: Value extends boolean
      ? "boolean"
      : Value extends bigint
        ? "bigint"
        : Value extends number
          ? "number"
          : "string";
    kind: "default";
    value: Value;
    exclusive: true;
    schema: Value extends bigint
      ? { default: Numeric<Value> }
      : { default: Value };
  }>;

type Numeric<T extends bigint> = `${T}` extends `${infer N extends number}`
  ? N
  : never;
