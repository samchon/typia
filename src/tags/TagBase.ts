export type TagBase<Props extends TagBase.IProps<any, any, any, any, any>> = {
    "typia.tag"?: Props;
};
export namespace TagBase {
    export interface IProps<
        Target extends "bigint" | "number" | "string" | "array",
        Kind extends string,
        Value extends boolean | bigint | number | string | undefined,
        Validate extends
            | string
            | {
                  [key in Target]?: string;
              },
        Exclusive extends boolean | string[],
    > {
        target: Target;
        kind: Kind;
        value: Value;
        validate: Validate;
        exclusive?: Exclusive | string[];
    }
}
