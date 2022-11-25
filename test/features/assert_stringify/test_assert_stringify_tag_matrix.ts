import { v4 } from "uuid";

import TSON from "../../../src";
import { TagMatrix } from "../../structures/TagMatrix";
import { _test_assert_stringify } from "../internal/_test_assert_stringify";

export const test_assert_stringify_tag_matrix = _test_assert_stringify(
    "matrix tag",
    TagMatrix.generate,
    (input) => TSON.assertStringify(input),
    TagMatrix.SPOILERS,
);
