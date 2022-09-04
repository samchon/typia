import { v4 } from "uuid";

import TSON from "../../../src";
import { RandomGenerator } from "../../internal/RandomGenerator";
import { TagArray } from "../../structures/TagArray";
import { _test_is } from "./_test_is";

export const test_is_tag_array = _test_is(
    "array tag",
    TagArray.generate,
    (input) => TSON.is(input),
    [
        (input) => (input[0].items = ["0", "1", "2"]),
        (input) => (input[1].items = RandomGenerator.array(() => v4(), 2)),
        (input) => (input[2].items = RandomGenerator.array(() => v4(), 7)),
        (input) => (input[3].minItems = [0, 1, 2]),
        (input) => (input[4].minItems = RandomGenerator.array(() => 3, 2)),
        (input) => (input[5].maxItems = [8]),
        (input) => (input[6].maxItems = ["12345678"]),
        (input) => (input[7].maxItems = RandomGenerator.array(() => 1, 8)),
        (input) => (input[8].both = ["0", "1", "2"]),
        (input) => (input[9].both = RandomGenerator.array(() => v4(), 2)),
        (input) => (input[10].both = RandomGenerator.array(() => v4(), 8)),
    ],
);
