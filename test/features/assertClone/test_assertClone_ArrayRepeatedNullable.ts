import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

export const test_assertClone_ArrayRepeatedNullable = _test_assertClone(
    "ArrayRepeatedNullable",
    ArrayRepeatedNullable.generate,
    (input) => typia.assertClone(input),
    ArrayRepeatedNullable.SPOILERS,
);
