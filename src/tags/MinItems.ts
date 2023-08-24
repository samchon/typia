export type MinItems<Size extends number> = {
    "typia.tag"?: {
        target: "array";
        kind: "minItems";
        value: Size;
        validate: `${Size} <= $input.length`;
    };
};
