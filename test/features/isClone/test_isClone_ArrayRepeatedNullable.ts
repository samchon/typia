import typia from "../../../src";

import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";
import { _test_isClone } from "../../internal/_test_isClone";

export const test_isClone_ArrayRepeatedNullable = _test_isClone(
    "ArrayRepeatedNullable",
    ArrayRepeatedNullable.generate,
    (input) => typia.isClone(input),
    ArrayRepeatedNullable.SPOILERS,
);
