import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

export const test_createIsParse_ArrayRepeatedNullable = _test_isParse(
    "ArrayRepeatedNullable",
    ArrayRepeatedNullable.generate,
    typia.createIsParse<ArrayRepeatedNullable>(),
    ArrayRepeatedNullable.SPOILERS,
);
