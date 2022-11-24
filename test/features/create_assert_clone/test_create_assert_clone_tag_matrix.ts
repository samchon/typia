import { v4 } from "uuid";

import TSON from "../../../src";
import { TagMatrix } from "../../structures/TagMatrix";
import { _test_assert_clone } from "../internal/_test_assert_clone";

export const test_create_assert_clone_tag_matrix = _test_assert_clone(
    "matrix tag",
    TagMatrix.generate,
    TSON.createAssertClone<TagMatrix>(),
    TagMatrix.SPOILERS,
);
