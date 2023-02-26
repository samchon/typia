import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_createValidateParse_DynamicConstant = _test_validateParse(
    "DynamicConstant",
    DynamicConstant.generate,
    typia.createValidateParse<DynamicConstant>(),
    DynamicConstant.SPOILERS,
);
