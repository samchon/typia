/**
 * Base type for all typia validation tags.
 *
 * `TagBase` is the foundation for all typia type tags (constraints like
 * `Minimum`, `MaxLength`, `Format`, etc.). It attaches compile-time metadata to
 * TypeScript types using a phantom property pattern.
 *
 * The typia transformer reads these tags at compile time and generates
 * appropriate runtime validation code. The tags themselves have no runtime
 * presence - they exist only in the type system.
 *
 * This is an internal implementation detail. Use the specific tag types (e.g.,
 * {@link Minimum}, {@link Format}, {@link Pattern}) rather than `TagBase`
 * directly.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template Props Tag properties defining validation behavior and schema output
 */
export type TagBase<
  Props extends TagBase.IProps<any, any, any, any, any, any>,
> = {
  /**
   * Compile-time marker property for typia transformer.
   *
   * This phantom property carries tag metadata in the type system. It is never
   * assigned at runtime - it exists only for the transformer to read during
   * compilation.
   */
  "typia.tag"?: Props;
};
export namespace TagBase {
  /**
   * Configuration interface for validation tag properties.
   *
   * Defines all the metadata a validation tag can specify, including what types
   * it applies to, how to validate values, and what to output in JSON Schema.
   *
   * @template Target Which primitive type(s) this tag can be applied to
   * @template Kind Unique identifier for this tag type
   * @template Value The constraint value specified by the user
   * @template Validate The validation expression to generate
   * @template Exclusive Whether this tag conflicts with others
   * @template Schema Additional JSON Schema properties to output
   */
  export interface IProps<
    Target extends
      | "boolean"
      | "bigint"
      | "number"
      | "string"
      | "array"
      | "object",
    Kind extends string,
    Value extends boolean | bigint | number | string | undefined,
    Validate extends
      | string
      | {
          [key in Target]?: string;
        },
    Exclusive extends boolean | string[],
    Schema extends object | undefined,
  > {
    /**
     * Target primitive type(s) this tag applies to.
     *
     * The transformer will error if the tag is applied to a property of a
     * different type. For example, `MinLength` targets `"string"` and cannot be
     * applied to numbers.
     */
    target: Target;

    /**
     * Unique identifier for this tag type.
     *
     * Used internally to identify the constraint kind. Examples: `"minimum"`,
     * `"maxLength"`, `"format"`, `"pattern"`.
     */
    kind: Kind;

    /**
     * User-configured constraint value.
     *
     * The value provided by the user when applying the tag. For `Minimum<5>`,
     * this would be `5`. For `Format<"email">`, this would be `"email"`.
     */
    value: Value;

    /**
     * Validation expression template.
     *
     * JavaScript expression string that validates the input value. Use `$input`
     * as a placeholder for the actual value. The expression is inserted into
     * the generated validation function.
     *
     * Can be a single string or an object mapping target types to different
     * expressions (for tags supporting multiple types).
     *
     * @example
     *   `"5 <= $input"`; // For Minimum<5>
     *
     * @example
     *   `"$input.length <= 10"`; // For MaxLength<10>
     */
    validate?: Validate;

    /**
     * Tag exclusivity configuration.
     *
     * Controls which other tags cannot be combined with this one:
     *
     * - `true`: No duplicate tags of the same kind allowed
     * - `string[]`: List of incompatible tag kinds
     * - `false` (default): No exclusivity restrictions
     *
     * For example, `Minimum` and `ExclusiveMinimum` are mutually exclusive -
     * only one can be applied to a property.
     *
     * @default false
     */
    exclusive?: Exclusive | string[];

    /**
     * Additional JSON Schema properties to output.
     *
     * Object containing schema properties to merge into the generated JSON
     * Schema for the annotated type. For `Minimum<5>`, this would be `{
     * minimum: 5 }`.
     */
    schema?: Schema;
  }
}
