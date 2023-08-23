export type MinItems<Size extends number> = {
    "typia.tag"?: {
        targeet: "array";
        kind: "minItems";
        value: Size;
        validate: `${Size} <= $input.length`;
    };
};
