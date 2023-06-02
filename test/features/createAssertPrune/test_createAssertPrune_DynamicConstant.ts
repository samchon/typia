import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_createAssertPrune_DynamicConstant = _test_assertPrune(
    "DynamicConstant",
    DynamicConstant.generate,
    typia.createAssertPrune<DynamicConstant>(),
    DynamicConstant.SPOILERS,
);
