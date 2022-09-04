import { v4 } from "uuid";

import TSON from "../../../src";
import { RandomGenerator } from "../../internal/RandomGenerator";
import { TagMatrix } from "../../structures/TagMatrix";
import { _test_assert } from "./_test_assert";

export const test_assert_tag_matrix = _test_assert(
    "matrix tag",
    TagMatrix.generate,
    (input) => TSON.assertType(input),
    [
        (input) => {
            input.matrix[0] = RandomGenerator.array(() => v4(), 2);
            return "$input.matrix[0]";
        },
        (input) => {
            input.matrix.splice(0, 1);
            return "$input.matrix";
        },
        (input) => {
            input.matrix[0][0] = "invalid uuid";
            return "$input.matrix[0][0]";
        },
    ],
);
