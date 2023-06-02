import typia from "../../../src";

import { DynamicJsonValue } from "../../structures/DynamicJsonValue";
import { _test_assertClone } from "../../internal/_test_assertClone";

export const test_createAssertClone_DynamicJsonValue = _test_assertClone(
    "DynamicJsonValue",
    DynamicJsonValue.generate,
    typia.createAssertClone<DynamicJsonValue>(),
    DynamicJsonValue.SPOILERS,
);
