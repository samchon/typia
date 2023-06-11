import typia from "../../../src";

import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";
import { _test_assertClone } from "../../internal/_test_assertClone";

export const test_createAssertClone_ArrayRepeatedNullable = _test_assertClone(
    "ArrayRepeatedNullable",
    ArrayRepeatedNullable.generate,
    typia.createAssertClone<ArrayRepeatedNullable>(),
    ArrayRepeatedNullable.SPOILERS,
);
