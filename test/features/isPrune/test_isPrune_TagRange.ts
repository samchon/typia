import typia from "../../../src";

import { TagRange } from "../../structures/TagRange";
import { _test_isPrune } from "../../internal/_test_isPrune";

export const test_isPrune_TagRange = _test_isPrune(
    "TagRange",
    TagRange.generate,
    (input) => typia.isPrune(input),
    TagRange.SPOILERS,
);
