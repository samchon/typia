import typia from "typia";

import { TagFormat } from "../../structures/TagFormat";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_validatePrune_TagFormat = _test_validatePrune(
    "TagFormat",
    TagFormat.generate,
    (input) => typia.validatePrune(input),
    TagFormat.SPOILERS,
);
