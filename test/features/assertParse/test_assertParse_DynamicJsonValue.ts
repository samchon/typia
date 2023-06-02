import typia from "../../../src";

import { DynamicJsonValue } from "../../structures/DynamicJsonValue";
import { _test_assertParse } from "../../internal/_test_assertParse";

export const test_assertParse_DynamicJsonValue = _test_assertParse(
    "DynamicJsonValue",
    DynamicJsonValue.generate,
    (input) => typia.assertParse<DynamicJsonValue>(input),
    DynamicJsonValue.SPOILERS,
);
