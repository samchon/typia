export type Minimum<Fixed extends number | bigint> = {
    "typia.tag"?: {
        target: Fixed extends number ? "number" : "bigint";
        kind: "minimum";
        value: Fixed;
        validate?: `${Fixed} <= $input`;
    };
};
