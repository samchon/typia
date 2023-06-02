import typia from "../../../src";

import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";
import { _test_validateClone } from "../../internal/_test_validateClone";

export const test_validateClone_ArrayRepeatedNullable = _test_validateClone(
    "ArrayRepeatedNullable",
    ArrayRepeatedNullable.generate,
    (input) => typia.validateClone(input),
    ArrayRepeatedNullable.SPOILERS,
);
