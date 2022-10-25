import { v4 } from "uuid";

import TSON from "../../../src";
import { TagMatrix } from "../../structures/TagMatrix";
import { _test_is_stringify } from "./_test_is_stringify";

export const test_is_stringify_tag_matrix = _test_is_stringify(
    "matrix tag",
    TagMatrix.generate,
    (input) => TSON.isStringify(input),
    TagMatrix.SPOILERS,
);
