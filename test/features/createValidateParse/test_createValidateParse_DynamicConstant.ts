import typia from "typia";

import { DynamicConstant } from "../../structures/DynamicConstant";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_createValidateParse_DynamicConstant = _test_validateParse(
    "DynamicConstant",
    DynamicConstant.generate,
    typia.createValidateParse<DynamicConstant>(),
    DynamicConstant.SPOILERS,
);
