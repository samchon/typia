import typia from "../../../src";

import { TagMatrix } from "../../structures/TagMatrix";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_TagMatrix = _test_isClone(
    "TagMatrix",
    TagMatrix.generate,
    typia.createIsClone<TagMatrix>(),
    TagMatrix.SPOILERS,
);
