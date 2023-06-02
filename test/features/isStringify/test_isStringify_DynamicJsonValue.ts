import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { DynamicJsonValue } from "../../structures/DynamicJsonValue";

export const test_isStringify_DynamicJsonValue = _test_isStringify(
    "DynamicJsonValue",
    DynamicJsonValue.generate,
    (input) => typia.isStringify(input),
    DynamicJsonValue.SPOILERS,
);
