export type TagBase<
    Target extends "bigint" | "number" | "string" | "array",
    Kind extends string,
    Value,
    Validate extends
        | string
        | {
              [key in Target]?: string;
          },
> = {
    "typia.tag"?: {
        target: Target;
        kind: Kind;
        value: Value;
        validate: Validate;
    };
};
