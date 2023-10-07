import typia from "typia";

import { RandomGenerator } from "typia/lib/utils/RandomGenerator";

type Dollar = typia.tags.TagBase<{
    kind: "dollar";
    target: "string";
    value: undefined;
    validate: `$input[0] === "$" && !isNaN(Number($input.substring(1).split(",").join("")))`;
}>;
type Postfix<Value extends string> = typia.tags.TagBase<{
    kind: "postfix";
    target: "string";
    value: Value;
    validate: `$input.endsWith("${Value}")`;
}>;
type PowerOf<Value extends number> = typia.tags.TagBase<{
    kind: "powerOf";
    target: "number";
    value: Value;
    validate: `(() => {
        const denominator: number = Math.log(${Value});
        const value: number = Math.log($input) / denominator;
        return Math.abs(value - Math.round(value)) < 0.00000001;
    })()`;
}>;

interface TypeTagCustom {
    id: string & typia.tags.Format<"uuid">;
    dollar: string & Dollar;
    postfix: string & Postfix<"abcd">;
    powerOf: number & PowerOf<2>;
}

const data = typia.random<TypeTagCustom>();
console.log(data);
console.log(typia.assert(data));
