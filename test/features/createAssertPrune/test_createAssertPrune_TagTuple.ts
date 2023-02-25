import typia from "../../../src";

import { TagTuple } from "../../structures/TagTuple";
import { _test_assertPrune } from "../internal/_test_assertPrune";

export const test_createAssertPrune_TagTuple = _test_assertPrune(
    "TagTuple",
    TagTuple.generate,
    typia.createAssertPrune<TagTuple>(),
    TagTuple.SPOILERS,
);
