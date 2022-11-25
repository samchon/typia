import { v4 } from "uuid";

import TSON from "../../../src";
import { TagMatrix } from "../../structures/TagMatrix";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_tag_matrix = _test_stringify(
    "matrix tag",
    TagMatrix.generate,
    (input) => TSON.stringify(input),
);
