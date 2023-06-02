import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { DynamicJsonValue } from "../../structures/DynamicJsonValue";

export const test_assertParse_DynamicJsonValue = _test_assertParse(
    "DynamicJsonValue",
    DynamicJsonValue.generate,
    (input) => typia.assertParse<DynamicJsonValue>(input),
    DynamicJsonValue.SPOILERS,
);
