import { v4 } from "uuid";

import TSON from "../../../src";
import { RandomGenerator } from "../../internal/RandomGenerator";
import { TagMatrix } from "../../structures/TagMatrix";
import { _test_is } from "./../is/_test_is";

export const test_create_is_tag_matrix = _test_is(
    "matrix tag",
    TagMatrix.generate,
    TSON.createIs<TagMatrix>(),
    TagMatrix.SPOILERS,
);
