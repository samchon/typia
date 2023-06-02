import typia from "../../../src";

import { DynamicJsonValue } from "../../structures/DynamicJsonValue";
import { _test_isStringify } from "../../internal/_test_isStringify";

export const test_isStringify_DynamicJsonValue = _test_isStringify(
    "DynamicJsonValue",
    DynamicJsonValue.generate,
    (input) => typia.isStringify(input),
    DynamicJsonValue.SPOILERS,
);
