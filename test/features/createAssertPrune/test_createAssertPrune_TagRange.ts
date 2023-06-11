import typia from "../../../src";

import { TagRange } from "../../structures/TagRange";
import { _test_assertPrune } from "../../internal/_test_assertPrune";

export const test_createAssertPrune_TagRange = _test_assertPrune(
    "TagRange",
    TagRange.generate,
    typia.createAssertPrune<TagRange>(),
    TagRange.SPOILERS,
);
