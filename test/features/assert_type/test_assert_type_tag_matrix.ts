import { v4 } from "uuid";

import TSON from "../../../src";
import { RandomGenerator } from "../../internal/RandomGenerator";
import { TagMatrix } from "../../structures/TagMatrix";
import { _test_assert_type } from "./_test_assert_type";

export const test_assert_type_tag_matrix = _test_assert_type(
    "matrix tag",
    TagMatrix.generate,
    (input) => TSON.assertType(input),
    TagMatrix.SPOILERS,
);
