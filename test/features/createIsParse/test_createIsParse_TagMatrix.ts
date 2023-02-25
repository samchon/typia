import typia from "../../../src";

import { TagMatrix } from "../../structures/TagMatrix";
import { _test_isParse } from "../internal/_test_isParse";

export const test_createIsParse_TagMatrix = _test_isParse(
    "TagMatrix",
    TagMatrix.generate,
    typia.createIsParse<TagMatrix>(),
    TagMatrix.SPOILERS,
);
