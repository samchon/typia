import typia from "../../../src";

import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";
import { _test_validateParse } from "../../internal/_test_validateParse";

export const test_createValidateParse_ArrayRepeatedNullable = _test_validateParse(
    "ArrayRepeatedNullable",
    ArrayRepeatedNullable.generate,
    typia.createValidateParse<ArrayRepeatedNullable>(),
    ArrayRepeatedNullable.SPOILERS,
);
