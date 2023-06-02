import typia from "../../../src";

import { DynamicTemplate } from "../../structures/DynamicTemplate";
import { _test_validatePrune } from "../../internal/_test_validatePrune";

export const test_validatePrune_DynamicTemplate = _test_validatePrune(
    "DynamicTemplate",
    DynamicTemplate.generate,
    (input) => typia.validatePrune(input),
    DynamicTemplate.SPOILERS,
);
