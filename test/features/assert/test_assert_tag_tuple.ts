import TSON from "../../../src";
import { RandomGenerator } from "../../internal/RandomGenerator";
import { TagTuple } from "../../structures/TagTuple";
import { _test_assert } from "./_test_assert";

export const test_assert_tag_tuple = _test_assert(
    "tuple tag",
    TagTuple.generate,
    (input) => TSON.assertType(input),
    [
        (input) => {
            input.tuple[0] = "12";
            return "$input.tuple[0]";
        },
        (input) => {
            input.tuple[0] = "12345678";
            return "$input.tuple[0]";
        },
        (input) => {
            input.tuple[1] = 2;
            return "$input.tuple[1]";
        },
        (input) => {
            input.tuple[1] = 8;
            return "$input.tuple[1]";
        },
        (input) => {
            input.tuple[2][0] = "12";
            return "$input.tuple[2][0]";
        },
        (input) => {
            input.tuple[2][0] = "12345678";
            return "$input.tuple[2][0]";
        },
        (input) => {
            input.tuple[2] = RandomGenerator.array(() => "123", 2);
            return "$input.tuple[2]";
        },
        (input) => {
            input.tuple[2] = RandomGenerator.array(() => "123", 8);
            return "$input.tuple[2]";
        },
        (input) => {
            input.tuple[3][0] = 2;
            return "$input.tuple[3][0]";
        },
        (input) => {
            input.tuple[3] = RandomGenerator.array(() => 3, 2);
            return "$input.tuple[3]";
        },
        (input) => {
            input.tuple[3] = RandomGenerator.array(() => 3, 8);
            return "$input.tuple[3]";
        },
    ],
);
