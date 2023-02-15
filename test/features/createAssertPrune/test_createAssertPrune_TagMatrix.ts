import typia from "typia";

import { TagMatrix } from "../../structures/TagMatrix";
import { _test_assertPrune } from "../internal/_test_assertPrune";

export const test_createAssertPrune_TagMatrix = _test_assertPrune(
    "TagMatrix",
    TagMatrix.generate,
    typia.createAssertPrune<TagMatrix>(),
    TagMatrix.SPOILERS,
);
