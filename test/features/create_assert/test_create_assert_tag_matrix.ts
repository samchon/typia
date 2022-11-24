import { v4 } from "uuid";

import TSON from "../../../src";
import { RandomGenerator } from "../../internal/RandomGenerator";
import { TagMatrix } from "../../structures/TagMatrix";
import { _test_assert } from "../internal/_test_assert";

export const test_create_assert_tag_matrix = _test_assert(
    "matrix tag",
    TagMatrix.generate,
    TSON.createAssert<TagMatrix>(),
    TagMatrix.SPOILERS,
);
