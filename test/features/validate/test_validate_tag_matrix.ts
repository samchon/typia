import { v4 } from "uuid";

import TSON from "../../../src";
import { RandomGenerator } from "../../internal/RandomGenerator";
import { TagMatrix } from "../../structures/TagMatrix";
import { _test_validate } from "./_test_validate";

export const test_validate_tag_matrix = _test_validate(
    "matrix tag",
    TagMatrix.generate,
    (input) => TSON.validate(input),
    [
        (input) => {
            input.matrix[0] = RandomGenerator.array(() => v4(), 2);
            return ["$input.matrix[0]"];
        },
        (input) => {
            input.matrix.splice(0, 1);
            return ["$input.matrix"];
        },
        (input) => {
            input.matrix[0][0] = "invalid uuid";
            return ["$input.matrix[0][0]"];
        },
    ],
);
