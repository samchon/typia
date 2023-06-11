import typia from "../../../src";

import { DynamicTemplate } from "../../structures/DynamicTemplate";
import { _test_assertPrune } from "../../internal/_test_assertPrune";

export const test_createAssertPrune_DynamicTemplate = _test_assertPrune(
    "DynamicTemplate",
    DynamicTemplate.generate,
    typia.createAssertPrune<DynamicTemplate>(),
    DynamicTemplate.SPOILERS,
);
