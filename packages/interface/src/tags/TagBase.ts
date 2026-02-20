/**
 * Base type for validation tags.
 *
 * `TagBase` attaches compile-time validation metadata to TypeScript types.
 * Processed by typia transformer to generate runtime validation code.
 *
 * @template Props Tag properties defining validation behavior
 */
export type TagBase<
  Props extends TagBase.IProps<any, any, any, any, any, any>,
> = {
  /** Compile-time marker property. No runtime meaning. */
  "typia.tag"?: Props;
};
export namespace TagBase {
  /** Properties interface for validation tags. */
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
    /** Target type. Mismatched usage causes compile error. */
    target: Target;

    /** Tag kind identifier. */
    kind: Kind;

    /** User-configured value. */
    value: Value;

    /**
     * Validation script using `$input` as variable name.
     * Inserted into generated validation function.
     */
    validate?: Validate;

    /**
     * Exclusivity rule. `true` prevents duplicate same-kind tags.
     * String array specifies incompatible tag kinds.
     *
     * @default false
     */
    exclusive?: Exclusive | string[];

    /** Additional schema info for {@link IJsonSchema}. */
    schema?: Schema;
  }
}
