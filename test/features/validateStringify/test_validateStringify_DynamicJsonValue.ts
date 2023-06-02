import typia from "../../../src";

import { DynamicJsonValue } from "../../structures/DynamicJsonValue";
import { _test_validateStringify } from "../../internal/_test_validateStringify";

export const test_validateStringify_DynamicJsonValue = _test_validateStringify(
    "DynamicJsonValue",
    DynamicJsonValue.generate,
    (input) => typia.validateStringify(input),
    DynamicJsonValue.SPOILERS,
);
