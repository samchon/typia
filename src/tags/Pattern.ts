export type Pattern<Value extends string> = {
    "typia.tag"?: {
        target: "string";
        kind: "pattern";
        value: Value;
        validate: `RegExp(/${Value}/).test($input)`;
    };
};
