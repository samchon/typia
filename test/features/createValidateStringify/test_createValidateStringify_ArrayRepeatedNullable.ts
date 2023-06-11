import typia from "../../../src";

import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";
import { _test_validateStringify } from "../../internal/_test_validateStringify";

export const test_createValidateStringify_ArrayRepeatedNullable = _test_validateStringify(
    "ArrayRepeatedNullable",
    ArrayRepeatedNullable.generate,
    typia.createValidateStringify<ArrayRepeatedNullable>(),
    ArrayRepeatedNullable.SPOILERS,
);
