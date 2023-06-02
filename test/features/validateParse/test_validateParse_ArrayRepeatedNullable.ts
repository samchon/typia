import typia from "../../../src";

import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";
import { _test_validateParse } from "../../internal/_test_validateParse";

export const test_validateParse_ArrayRepeatedNullable = _test_validateParse(
    "ArrayRepeatedNullable",
    ArrayRepeatedNullable.generate,
    (input) => typia.validateParse<ArrayRepeatedNullable>(input),
    ArrayRepeatedNullable.SPOILERS,
);
