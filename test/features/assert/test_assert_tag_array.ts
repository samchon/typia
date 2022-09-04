import { v4 } from "uuid";

import TSON from "../../../src";
import { RandomGenerator } from "../../internal/RandomGenerator";
import { TagArray } from "../../structures/TagArray";
import { _test_assert } from "./_test_assert";

export const test_assert_tag_array = _test_assert(
    "array tag",
    TagArray.generate,
    (input) => TSON.assertType(input),
    [
        (input) => {
            input[0].items = ["0", "1", "2"];
            return "$input[0].items[0]";
        },
        (input) => {
            input[1].items = RandomGenerator.array(() => v4(), 2);
            return "$input[1].items";
        },
        (input) => {
            input[2].items = RandomGenerator.array(() => v4(), 7);
            return "$input[2].items";
        },
        (input) => {
            input[3].minItems = [0, 1, 2];
            return "$input[3].minItems[0]";
        },
        (input) => {
            input[4].minItems = RandomGenerator.array(() => 3, 2);
            return "$input[4].minItems";
        },
        (input) => {
            input[5].maxItems = [8];
            return "$input[5].maxItems[0]";
        },
        (input) => {
            input[6].maxItems = ["12345678"];
            return "$input[6].maxItems[0]";
        },
        (input) => {
            input[7].maxItems = RandomGenerator.array(() => 1, 8);
            return "$input[7].maxItems";
        },
        (input) => {
            input[8].both = ["0", "1", "2"];
            return "$input[8].both[0]";
        },
        (input) => {
            input[9].both = RandomGenerator.array(() => v4(), 2);
            return "$input[9].both";
        },
        (input) => {
            input[10].both = RandomGenerator.array(() => v4(), 8);
            return "$input[10].both";
        },
    ],
);
