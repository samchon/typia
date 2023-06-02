import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { DynamicJsonValue } from "../../structures/DynamicJsonValue";

export const test_createAssertParse_DynamicJsonValue = _test_assertParse(
    "DynamicJsonValue",
    DynamicJsonValue.generate,
    typia.createAssertParse<DynamicJsonValue>(),
    DynamicJsonValue.SPOILERS,
);
