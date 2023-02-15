import typia from "typia";

import { DynamicTemplate } from "../../structures/DynamicTemplate";
import { _test_isPrune } from "../internal/_test_isPrune";

export const test_isPrune_DynamicTemplate = _test_isPrune(
    "DynamicTemplate",
    DynamicTemplate.generate,
    (input) => typia.isPrune(input),
    DynamicTemplate.SPOILERS,
);
