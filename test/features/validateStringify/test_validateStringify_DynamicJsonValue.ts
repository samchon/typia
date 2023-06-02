import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { DynamicJsonValue } from "../../structures/DynamicJsonValue";

export const test_validateStringify_DynamicJsonValue = _test_validateStringify(
    "DynamicJsonValue",
    DynamicJsonValue.generate,
    (input) => typia.validateStringify(input),
    DynamicJsonValue.SPOILERS,
);
