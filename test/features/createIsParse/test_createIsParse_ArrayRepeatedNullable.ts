import typia from "../../../src";

import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";
import { _test_isParse } from "../../internal/_test_isParse";

export const test_createIsParse_ArrayRepeatedNullable = _test_isParse(
    "ArrayRepeatedNullable",
    ArrayRepeatedNullable.generate,
    typia.createIsParse<ArrayRepeatedNullable>(),
    ArrayRepeatedNullable.SPOILERS,
);
