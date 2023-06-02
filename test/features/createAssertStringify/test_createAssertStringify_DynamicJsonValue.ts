import typia from "../../../src";

import { DynamicJsonValue } from "../../structures/DynamicJsonValue";
import { _test_assertStringify } from "../../internal/_test_assertStringify";

export const test_createAssertStringify_DynamicJsonValue = _test_assertStringify(
    "DynamicJsonValue",
    DynamicJsonValue.generate,
    typia.createAssertStringify<DynamicJsonValue>(),
    DynamicJsonValue.SPOILERS,
);
