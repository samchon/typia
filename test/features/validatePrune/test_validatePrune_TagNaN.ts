import typia from "../../../src";

import { TagNaN } from "../../structures/TagNaN";
import { _test_validatePrune } from "../../internal/_test_validatePrune";

export const test_validatePrune_TagNaN = _test_validatePrune(
    "TagNaN",
    TagNaN.generate,
    (input) => typia.validatePrune(input),
    TagNaN.SPOILERS,
);
