import typia from "../../../src";

import { DynamicConstant } from "../../structures/DynamicConstant";
import { _test_assertPrune } from "../internal/_test_assertPrune";

export const test_assertPrune_DynamicConstant = _test_assertPrune(
    "DynamicConstant",
    DynamicConstant.generate,
    (input) => typia.assertPrune(input),
    DynamicConstant.SPOILERS,
);
