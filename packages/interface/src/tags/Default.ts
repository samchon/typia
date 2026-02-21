import { TagBase } from "./TagBase";

/**
 * Specifies a default value for properties.
 *
 * `Default<Value>` sets a fallback value in generated JSON Schema. Supports
 * boolean, bigint, number, and string literals.
 *
 * @template Value Default value literal
 * @author Jeongho Nam - https://github.com/samchon
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
