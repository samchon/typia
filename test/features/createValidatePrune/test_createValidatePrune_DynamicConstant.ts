import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_createValidatePrune_DynamicConstant = _test_validatePrune(
    "DynamicConstant",
    DynamicConstant.generate,
    typia.createValidatePrune<DynamicConstant>(),
    DynamicConstant.SPOILERS,
);
