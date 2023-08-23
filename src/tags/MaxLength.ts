export type MaxLength<Fixed extends number> = {
    "typia.tag"?: {
        target: "array";
        kind: "maxLength";
        value: number;
        validate: `$input.length <= ${Fixed}`;
    };
};
