import typia from "../../../src";

import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";
import { _test_validateClone } from "../../internal/_test_validateClone";

export const test_createValidateClone_ArrayRepeatedNullable = _test_validateClone(
    "ArrayRepeatedNullable",
    ArrayRepeatedNullable.generate,
    typia.createValidateClone<ArrayRepeatedNullable>(),
    ArrayRepeatedNullable.SPOILERS,
);
