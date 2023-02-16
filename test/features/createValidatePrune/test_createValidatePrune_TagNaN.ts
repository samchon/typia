import typia from "typia";

import { TagNaN } from "../../structures/TagNaN";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_createValidatePrune_TagNaN = _test_validatePrune(
    "TagNaN",
    TagNaN.generate,
    typia.createValidatePrune<TagNaN>(),
    TagNaN.SPOILERS,
);
