import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_validatePrune_DynamicConstant = _test_validatePrune(
    "DynamicConstant",
    DynamicConstant.generate,
    (input) => typia.validatePrune(input),
    DynamicConstant.SPOILERS,
);
