import typia from "../../../src";

import { TagPattern } from "../../structures/TagPattern";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_createValidatePrune_TagPattern = _test_validatePrune(
    "TagPattern",
    TagPattern.generate,
    typia.createValidatePrune<TagPattern>(),
    TagPattern.SPOILERS,
);
