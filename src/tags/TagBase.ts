export type TagBase<
  Props extends TagBase.IProps<any, any, any, any, any, any>,
> = {
  /**
   * This is a dummy property for compilation.
   *
   * It does not mean anything in runtime.
   */
  "typia.tag"?: Props;
};
export namespace TagBase {
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
     * Target type.
     *
     * If user tries to adapt this tag to a different type, it would be a compile
     * error.
     *
     * For example, you've configured target type as `string`, but user adapted it
     * onto a `number` type (`number & YourCustomTag<Value>`), then it would be
     * blocked by TypeScript compiler.
     */
    target: Target;

    /**
     * What kind of tag is this?
     */
    kind: Kind;

    /**
     * Value to be configured by user.
     */
    value: Value;

    /**
     * Validation script.
     *
     * This script would be inserted into the generated validation function.
     * In here script, target variable name must be `$input`. The variable name
     * `$input` would be transformed to the suitable when compilation.
     *
     * Also, If you've take a mistake on this script, compile error would be
     * occurred. So, define it with confidence. Compiler will block all your
     * mistakes.
     */
    validate?: Validate;

    /**
     * Exclusive option.
     *
     * If this property configured as `true`, same {@link kind} tag cannot be
     * duplicated in the target type. Otherwise, if you've configured this
     * property as string array, all of the {@link kind} value assigned
     * tags cannot be compatible in the target type.
     *
     * @default false
     */
    exclusive?: Exclusive | string[];

    /**
     * Additional schema info assigned to the {@link IJsonSchema} object.
     */
    schema?: Schema;
  }
}
