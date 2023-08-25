import { v4 } from "uuid";

import { RandomGenerator } from "typia/lib/utils/RandomGenerator";

import typia from "../../src";
import { Spoiler } from "../helpers/Spoiler";

export interface TypeTagCustom {
    id: string & typia.tags.Format<"uuid">;
    dollar: string & Dolloar;
    postfix: string & Postfix;
    log: number & PowerOf<10>;
}
export namespace TypeTagCustom {
    export function generate(): TypeTagCustom {
        return {
            id: v4(),
            dollar: "$" + RandomGenerator.integer(),
            postfix: RandomGenerator.string() + "abcd",
            log: 100,
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
        (input) => {
            input.log = 3;
            return ["$input.log"];
        },
    ];

    export const RANDOM: typia.IRandomGenerator = {
        ...RandomGenerator,
        customs: {
            string: (tags) => {
                if (tags.find((t) => t.name === "dollar") !== undefined)
                    return "$" + RandomGenerator.integer();
                const postfix = tags.find((t) => t.name === "postfix");
                if (postfix !== undefined)
                    return RandomGenerator.string() + postfix.value;
            },
            number: (tags) => {
                const powerOf = tags.find((t) => t.name === "powerOf");
                if (powerOf !== undefined)
                    return Math.pow(
                        Number(powerOf.value),
                        RandomGenerator.integer(1, 4),
                    );
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

type Postfix = typia.tags.TagBase<{
    kind: "postfix";
    target: "string";
    value: undefined;
    validate: `$input.endsWith($value)`;
}>;

type PowerOf<X extends number> = typia.tags.TagBase<{
    kind: "powerOf";
    target: "number";
    value: X;
    validate: `(() => {
    const value: number = Math.log($input) / Math.log(${X});
    return Math.abs(value - Math.round(value)) < 0.00000001;
})()`;
}>;
