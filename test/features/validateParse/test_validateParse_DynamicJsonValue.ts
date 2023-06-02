import typia from "../../../src";

import { DynamicJsonValue } from "../../structures/DynamicJsonValue";
import { _test_validateParse } from "../../internal/_test_validateParse";

export const test_validateParse_DynamicJsonValue = _test_validateParse(
    "DynamicJsonValue",
    DynamicJsonValue.generate,
    (input) => typia.validateParse<DynamicJsonValue>(input),
    DynamicJsonValue.SPOILERS,
);
