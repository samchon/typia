import { v4 } from "uuid";

import TSON from "../../../src";
import { TagMatrix } from "../../structures/TagMatrix";
import { _test_assert_stringify } from "./../assert_stringify/_test_assert_stringify";

export const test_create_assert_stringify_tag_matrix = _test_assert_stringify(
    "matrix tag",
    TagMatrix.generate,
    TSON.createAssertStringify<TagMatrix>(),
    TagMatrix.SPOILERS,
);
