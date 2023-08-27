import { v4 } from "uuid";

import { RandomGenerator } from "typia/lib/utils/RandomGenerator";

import typia from "../../src";
import { Spoiler } from "../helpers/Spoiler";

export interface TypeTagCustom {
    id: string & typia.tags.Format<"uuid">;
    dollar: string & Dolloar;
    postfix: string & Postfix<"abcd">;
}
export namespace TypeTagCustom {
    export function generate(): TypeTagCustom {
        return {
            id: v4(),
            dollar: "$" + RandomGenerator.integer(),
            postfix: RandomGenerator.string() + "abcd",
        };
    }

    export const SPOILERS: Spoiler<TypeTagCustom>[] = [
        (input) => {
            input.id = "invalid";
            return ["$input.id"];
        },
        (input) => {
            input.dollar = RandomGenerator.integer().toString();
            return ["$input.dollar"];
        },
        (input) => {
            input.postfix = RandomGenerator.string() + "dcba";
            return ["$input.postfix"];
        },
    ];

    export const RANDOM: typia.IRandomGenerator = {
        ...RandomGenerator,
        customs: {
            string: (tags) => {
                if (tags.find((t) => t.kind === "dollar") !== undefined)
                    return "$" + RandomGenerator.integer();
                const postfix = tags.find((t) => t.kind === "postfix");
                if (postfix !== undefined)
                    return RandomGenerator.string() + postfix.value;
            },
        },
    };
}

type Dolloar = typia.tags.TagBase<{
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
