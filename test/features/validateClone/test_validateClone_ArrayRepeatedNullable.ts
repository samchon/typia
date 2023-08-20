import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

export const test_validateClone_ArrayRepeatedNullable = _test_validateClone(
    "ArrayRepeatedNullable",
    ArrayRepeatedNullable.generate,
    (input) => typia.validateClone<ArrayRepeatedNullable>(input),
    ArrayRepeatedNullable.SPOILERS,
);
