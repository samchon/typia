import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

export const test_validateParse_ArrayRepeatedNullable = _test_validateParse(
    "ArrayRepeatedNullable",
    ArrayRepeatedNullable.generate,
    (input) => typia.validateParse<ArrayRepeatedNullable>(input),
    ArrayRepeatedNullable.SPOILERS,
);
