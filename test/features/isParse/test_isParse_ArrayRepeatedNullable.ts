import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

export const test_isParse_ArrayRepeatedNullable = _test_isParse(
    "ArrayRepeatedNullable",
    ArrayRepeatedNullable.generate,
    (input) => typia.isParse<ArrayRepeatedNullable>(input),
    ArrayRepeatedNullable.SPOILERS,
);
