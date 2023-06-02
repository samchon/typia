import typia from "../../../src";

import { DynamicJsonValue } from "../../structures/DynamicJsonValue";
import { _test_assertParse } from "../../internal/_test_assertParse";

export const test_createAssertParse_DynamicJsonValue = _test_assertParse(
    "DynamicJsonValue",
    DynamicJsonValue.generate,
    typia.createAssertParse<DynamicJsonValue>(),
    DynamicJsonValue.SPOILERS,
);
