import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

export const test_createAssertParse_ArrayRepeatedNullable = _test_assertParse(
    "ArrayRepeatedNullable",
    ArrayRepeatedNullable.generate,
    typia.createAssertParse<ArrayRepeatedNullable>(),
    ArrayRepeatedNullable.SPOILERS,
);
