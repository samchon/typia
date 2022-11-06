import { v4 } from "uuid";

import TSON from "../../../src";
import { TagMatrix } from "../../structures/TagMatrix";
import { _test_is_clone } from "./_test_is_clone";

export const test_is_clone_tag_matrix = _test_is_clone(
    "matrix tag",
    TagMatrix.generate,
    (input) => TSON.isClone(input),
    TagMatrix.SPOILERS,
);
