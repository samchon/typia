import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

export const test_createAssertClone_ArrayRepeatedNullable = _test_assertClone(
    "ArrayRepeatedNullable",
    ArrayRepeatedNullable.generate,
    typia.createAssertClone<ArrayRepeatedNullable>(),
    ArrayRepeatedNullable.SPOILERS,
);
