export type MaxItems<Size extends number> = {
    "typia.tag"?: {
        target: "array";
        kind: "maxItems";
        value: Size;
        validate: `$input.length <= ${Size}`;
    };
};
