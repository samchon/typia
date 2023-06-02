import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { DynamicJsonValue } from "../../structures/DynamicJsonValue";

export const test_assertStringify_DynamicJsonValue = _test_assertStringify(
    "DynamicJsonValue",
    DynamicJsonValue.generate,
    (input) => typia.assertStringify(input),
    DynamicJsonValue.SPOILERS,
);
