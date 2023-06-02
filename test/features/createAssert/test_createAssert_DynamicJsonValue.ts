import typia from "../../../src";

import { DynamicJsonValue } from "../../structures/DynamicJsonValue";
import { _test_assert } from "../../internal/_test_assert";

export const test_createAssert_DynamicJsonValue = _test_assert(
    "DynamicJsonValue",
    DynamicJsonValue.generate,
    typia.createAssert<DynamicJsonValue>(),
    DynamicJsonValue.SPOILERS,
);
