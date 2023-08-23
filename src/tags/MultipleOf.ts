export type MultipleOf<Fixed extends number | bigint> = {
    "typia.tag"?: {
        target: Fixed extends bigint ? "bigint" : "number";
        kind: "multipleOf";
        value: Fixed;
        validate: `$input % ${Fixed} === ${Fixed extends bigint
            ? "bigint"
            : "number"}`;
    };
};
