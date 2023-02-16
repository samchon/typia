import typia from "typia";

import { TagRange } from "../../structures/TagRange";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_createValidatePrune_TagRange = _test_validatePrune(
    "TagRange",
    TagRange.generate,
    typia.createValidatePrune<TagRange>(),
    TagRange.SPOILERS,
);
