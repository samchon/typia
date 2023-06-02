import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

export const test_assertParse_ArrayRepeatedNullable = _test_assertParse(
    "ArrayRepeatedNullable",
    ArrayRepeatedNullable.generate,
    (input) => typia.assertParse<ArrayRepeatedNullable>(input),
    ArrayRepeatedNullable.SPOILERS,
);
