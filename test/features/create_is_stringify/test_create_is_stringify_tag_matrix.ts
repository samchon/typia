import { v4 } from "uuid";

import TSON from "../../../src";
import { TagMatrix } from "../../structures/TagMatrix";
import { _test_is_stringify } from "../internal/_test_is_stringify";

export const test_create_is_stringify_tag_matrix = _test_is_stringify(
    "matrix tag",
    TagMatrix.generate,
    TSON.createIsStringify<TagMatrix>(),
    TagMatrix.SPOILERS,
);
