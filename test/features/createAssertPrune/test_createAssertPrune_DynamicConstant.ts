import typia from "typia";

import { DynamicConstant } from "../../structures/DynamicConstant";
import { _test_assertPrune } from "../internal/_test_assertPrune";

export const test_createAssertPrune_DynamicConstant = _test_assertPrune(
    "DynamicConstant",
    DynamicConstant.generate,
    typia.createAssertPrune<DynamicConstant>(),
    DynamicConstant.SPOILERS,
);
