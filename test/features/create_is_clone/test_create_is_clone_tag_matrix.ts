import { v4 } from "uuid";

import TSON from "../../../src";
import { TagMatrix } from "../../structures/TagMatrix";
import { _test_is_clone } from "./../is_clone/_test_is_clone";

export const test_create_is_clone_tag_matrix = _test_is_clone(
    "matrix tag",
    TagMatrix.generate,
    TSON.createIsClone<TagMatrix>(),
    TagMatrix.SPOILERS,
);
