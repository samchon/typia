import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

export const test_assertStringify_ArrayRepeatedNullable = _test_assertStringify(
    "ArrayRepeatedNullable",
    ArrayRepeatedNullable.generate,
    (input) => typia.assertStringify(input),
    ArrayRepeatedNullable.SPOILERS,
);
