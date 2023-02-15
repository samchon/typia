import typia from "typia";

import { TagRange } from "../../structures/TagRange";
import { _test_assertPrune } from "../internal/_test_assertPrune";

export const test_assertPrune_TagRange = _test_assertPrune(
    "TagRange",
    TagRange.generate,
    (input) => typia.assertPrune(input),
    TagRange.SPOILERS,
);
