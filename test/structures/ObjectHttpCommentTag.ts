import { ArrayUtil } from "typia/lib/utils/ArrayUtil";
import { RandomGenerator } from "typia/lib/utils/RandomGenerator";

import { Spoiler } from "../helpers/Spoiler";

export interface ObjectHttpCommentTag {
    /**
     * @type int
     */
    int: number;

    /**
     * @type uint64
     */
    uint64: bigint;

    /**
     * @format uuid
     */
    uuid: string;

    /**
     * @minItems 10
     * @maxItems 100
     */
    items: number[];
}
export namespace ObjectHttpCommentTag {
    export const HEADERS = true;
    export const QUERY = true;
    export const JSONABLE = false;

    export function generate(): ObjectHttpCommentTag {
        return {
            int: RandomGenerator.integer(0, 100),
            uint64: RandomGenerator.bigint(0n, 20_000n),
            uuid: RandomGenerator.uuid(),
            items: ArrayUtil.repeat(25, () => RandomGenerator.number(3, 7)),
        };
    }

    export const SPOILERS: Spoiler<ObjectHttpCommentTag>[] = [
        (input) => {
            input.int = 3.141592;
            return ["$input.int"];
        },
        (input) => {
            input.uint64 = -1n;
            return ["$input.uint64"];
        },
        (input) => {
            input.uuid = "not-uuid";
            return ["$input.uuid"];
        },
        (input) => {
            input.items[10] = "something" as any;
            return ["$input.items[10]"];
        },
        (input) => {
            input.items = ArrayUtil.repeat(9, () =>
                RandomGenerator.number(3, 7),
            );
            return ["$input.items"];
        },
        (input) => {
            input.items = ArrayUtil.repeat(101, () =>
                RandomGenerator.integer(3, 7),
            );
            return ["$input.items"];
        },
    ];
}
