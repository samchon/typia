import { v4 } from "uuid";

import TSON from "../../../src";
import { RandomGenerator } from "../../internal/RandomGenerator";
import { TagMatrix } from "../../structures/TagMatrix";
import { _test_is } from "../internal/_test_is";

export const test_is_tag_matrix = _test_is(
    "matrix tag",
    TagMatrix.generate,
    (input) => TSON.is(input),
    TagMatrix.SPOILERS,
);
