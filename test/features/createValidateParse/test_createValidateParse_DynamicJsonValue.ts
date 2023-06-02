import typia from "../../../src";

import { DynamicJsonValue } from "../../structures/DynamicJsonValue";
import { _test_validateParse } from "../../internal/_test_validateParse";

export const test_createValidateParse_DynamicJsonValue = _test_validateParse(
    "DynamicJsonValue",
    DynamicJsonValue.generate,
    typia.createValidateParse<DynamicJsonValue>(),
    DynamicJsonValue.SPOILERS,
);
