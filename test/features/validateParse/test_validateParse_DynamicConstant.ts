import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_validateParse_DynamicConstant = _test_validateParse(
    "DynamicConstant",
    DynamicConstant.generate,
    (input) => typia.validateParse<DynamicConstant>(input),
    DynamicConstant.SPOILERS,
);
