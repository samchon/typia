export type ExclusiveMaximum<Fixed extends number | bigint> = {
    "typia.tag"?: {
        target: Fixed extends number ? "number" : "bigint";
        kind: "exclusiveMaximum";
        value: Fixed;
        validate?: `$input < ${Fixed}`;
    };
};
