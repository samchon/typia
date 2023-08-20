import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_assertPrune_DynamicConstant = _test_assertPrune(
    "DynamicConstant",
    DynamicConstant.generate,
    (input) => typia.assertPrune<DynamicConstant>(input),
    DynamicConstant.SPOILERS,
);
