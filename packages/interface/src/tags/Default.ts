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
 * Primitive literals and readonly tuples of primitive literals are supported.
 * Array defaults must be concrete tuples, normally captured with `as const`; an
 * open array type such as `string[]` does not identify a value to emit. For
 * object defaults, use optional properties with runtime default assignment.
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
 *     // Default selected columns
 *     columns: (string[] & Default<readonly ["id", "name"]>) | undefined;
 *   }
 *
 * @template Value The primitive or readonly tuple default value
 */
export type Default<Value extends DefaultAtomic | DefaultArray> = TagBase<{
  target: Value extends DefaultArray
    ? "array"
    : Value extends boolean
      ? "boolean"
      : Value extends bigint
        ? "bigint"
        : Value extends number
          ? "number"
          : "string";
  kind: "default";
  value: Value;
  exclusive: true;
  schema: { default: JsonDefault<Value> };
}>;

type Numeric<T extends bigint> = `${T}` extends `${infer N extends number}`
  ? N
  : never;

type DefaultAtomic = boolean | bigint | number | string;
type DefaultArray = readonly [] | readonly [DefaultAtomic, ...DefaultAtomic[]];

type JsonDefault<Value> = Value extends bigint
  ? Numeric<Value>
  : Value extends DefaultArray
    ? { [Key in keyof Value]: JsonDefault<Value[Key]> }
    : Value;
