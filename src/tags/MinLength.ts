export type MinLength<Fixed extends number> = {
    "typia.tag"?: {
        target: "array";
        kind: "minLength";
        value: number;
        validate: `${Fixed} <= $input.length`;
    };
};
