import { v4 } from "uuid";

import TSON from "../../../src";
import { TagMatrix } from "../../structures/TagMatrix";
import { _test_clone } from "./../clone/_test_clone";

export const test_create_clone_tag_matrix = _test_clone(
    "matrix tag",
    TagMatrix.generate,
    TSON.createClone<TagMatrix>(),
);
