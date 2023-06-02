import typia from "../../../src";

import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";
import { _test_assertStringify } from "../../internal/_test_assertStringify";

export const test_createAssertStringify_ArrayRepeatedNullable = _test_assertStringify(
    "ArrayRepeatedNullable",
    ArrayRepeatedNullable.generate,
    typia.createAssertStringify<ArrayRepeatedNullable>(),
    ArrayRepeatedNullable.SPOILERS,
);
