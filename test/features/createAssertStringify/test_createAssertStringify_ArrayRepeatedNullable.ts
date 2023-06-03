import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

export const test_createAssertStringify_ArrayRepeatedNullable =
    _test_assertStringify(
        "ArrayRepeatedNullable",
        ArrayRepeatedNullable.generate,
        typia.createAssertStringify<ArrayRepeatedNullable>(),
        ArrayRepeatedNullable.SPOILERS,
    );
