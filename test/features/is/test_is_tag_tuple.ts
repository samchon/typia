import TSON from "../../../src";
import { RandomGenerator } from "../../internal/RandomGenerator";
import { TagTuple } from "../../structures/TagTuple";
import { _test_is } from "./_test_is";

export const test_is_tag_tuple = _test_is(
    "tuple tag",
    TagTuple.generate,
    (input) => TSON.is(input),
    [
        (input) => (input.tuple[0] = "12"),
        (input) => (input.tuple[0] = "12345678"),
        (input) => (input.tuple[1] = 2),
        (input) => (input.tuple[1] = 8),
        (input) => (input.tuple[2][0] = "12"),
        (input) => (input.tuple[2][0] = "12345678"),
        (input) => (input.tuple[2] = RandomGenerator.array(() => "123", 2)),
        (input) => (input.tuple[2] = RandomGenerator.array(() => "123", 8)),
        (input) => (input.tuple[3][0] = 2),
        (input) => (input.tuple[3] = RandomGenerator.array(() => 3, 2)),
        (input) => (input.tuple[3] = RandomGenerator.array(() => 3, 8)),
    ],
);
