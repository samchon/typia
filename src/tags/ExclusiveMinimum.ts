export type ExclusiveMinimum<Fixed extends number | bigint> = {
    "typia.tag"?: {
        target: Fixed extends number ? "number" : "bigint";
        kind: "exclusiveMinimum";
        value: Fixed;
        validate?: `${Fixed} < $input`;
    };
};
