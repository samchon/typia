import typia from "../../../src";

import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";
import { _test_isStringify } from "../../internal/_test_isStringify";

export const test_createIsStringify_ArrayRepeatedNullable = _test_isStringify(
    "ArrayRepeatedNullable",
    ArrayRepeatedNullable.generate,
    typia.createIsStringify<ArrayRepeatedNullable>(),
    ArrayRepeatedNullable.SPOILERS,
);
