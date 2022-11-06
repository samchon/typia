import { v4 } from "uuid";

import TSON from "../../../src";
import { TagMatrix } from "../../structures/TagMatrix";
import { _test_clone } from "./_test_clone";

export const test_clone_tag_matrix = _test_clone(
    "matrix tag",
    TagMatrix.generate,
    (input) => TSON.clone(input),
);
