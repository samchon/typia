import { TagBase } from "./TagBase";

/**
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
