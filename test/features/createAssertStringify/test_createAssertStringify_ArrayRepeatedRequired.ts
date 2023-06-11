import typia from "../../../src";

import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";
import { _test_assertStringify } from "../../internal/_test_assertStringify";

export const test_createAssertStringify_ArrayRepeatedRequired = _test_assertStringify(
    "ArrayRepeatedRequired",
    ArrayRepeatedRequired.generate,
    typia.createAssertStringify<ArrayRepeatedRequired>(),
    ArrayRepeatedRequired.SPOILERS,
);
