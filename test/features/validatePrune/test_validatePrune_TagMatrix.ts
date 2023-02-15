import typia from "typia";

import { TagMatrix } from "../../structures/TagMatrix";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_validatePrune_TagMatrix = _test_validatePrune(
    "TagMatrix",
    TagMatrix.generate,
    (input) => typia.validatePrune(input),
    TagMatrix.SPOILERS,
);
