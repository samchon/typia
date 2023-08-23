export type MaxItems<Size extends number> = {
    "typia.tag"?: {
        targeet: "array";
        kind: "maxItems";
        value: Size;
        validate: `$input.length <= ${Size}`;
    };
};
