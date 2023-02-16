import typia from "typia";

import { DynamicConstant } from "../../structures/DynamicConstant";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_DynamicConstant = _test_validateStringify(
    "DynamicConstant",
    DynamicConstant.generate,
    (input) => typia.validateStringify(input),
    DynamicConstant.SPOILERS,
);
