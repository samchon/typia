import typia from "../../../src";

import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";
import { _test_validate } from "../../internal/_test_validate";

export const test_createValidate_ArrayRepeatedNullable = _test_validate(
    "ArrayRepeatedNullable",
    ArrayRepeatedNullable.generate,
    typia.createValidate<ArrayRepeatedNullable>(),
    ArrayRepeatedNullable.SPOILERS,
);
