import typia from "../../../src";

import { TagArray } from "../../structures/TagArray";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_createValidatePrune_TagArray = _test_validatePrune(
    "TagArray",
    TagArray.generate,
    typia.createValidatePrune<TagArray>(),
    TagArray.SPOILERS,
);
