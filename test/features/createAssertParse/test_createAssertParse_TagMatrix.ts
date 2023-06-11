import typia from "../../../src";

import { TagMatrix } from "../../structures/TagMatrix";
import { _test_assertParse } from "../../internal/_test_assertParse";

export const test_createAssertParse_TagMatrix = _test_assertParse(
    "TagMatrix",
    TagMatrix.generate,
    typia.createAssertParse<TagMatrix>(),
    TagMatrix.SPOILERS,
);
