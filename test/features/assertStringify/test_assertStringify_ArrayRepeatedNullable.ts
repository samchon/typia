import typia from "../../../src";

import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";
import { _test_assertStringify } from "../../internal/_test_assertStringify";

export const test_assertStringify_ArrayRepeatedNullable = _test_assertStringify(
    "ArrayRepeatedNullable",
    ArrayRepeatedNullable.generate,
    (input) => typia.assertStringify(input),
    ArrayRepeatedNullable.SPOILERS,
);
