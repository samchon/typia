import typia from "../../../src";

import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";
import { _test_isClone } from "../../internal/_test_isClone";

export const test_createIsClone_ArrayRepeatedNullable = _test_isClone(
    "ArrayRepeatedNullable",
    ArrayRepeatedNullable.generate,
    typia.createIsClone<ArrayRepeatedNullable>(),
    ArrayRepeatedNullable.SPOILERS,
);
