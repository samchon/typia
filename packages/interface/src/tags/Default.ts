import { TagBase } from "./TagBase";

/**
<<<<<<< HEAD
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
=======
 * Default value metadata for JSON Schema generation.
 *
 * `Default<Value>` is a type tag that specifies a default value for a property
 * in the generated JSON Schema. This is metadata-only - typia does not
 * automatically apply default values at runtime.
 *
 * The default value appears in the `default` field of the JSON Schema output,
 * which API documentation tools and code generators can use to show default
 * values or generate code that applies them.
 *
 * Only primitive literal types are supported: `boolean`, `bigint`, `number`,
 * and `string`. For complex defaults, consider using optional properties with
 * runtime default assignment.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @example
 *   interface Config {
 *     // Default to 10 items per page
 *     pageSize: (number & Default<10>) | undefined;
 *     // Default to enabled
 *     enabled: (boolean & Default<true>) | undefined;
 *     // Default sort order
 *     sortOrder: (string & Default<"asc">) | undefined;
 *   }
 *
 * @template Value The default value literal (must be a primitive)
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
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
