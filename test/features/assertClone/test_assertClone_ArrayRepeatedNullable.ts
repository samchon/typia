import typia from "../../../src";

import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";
import { _test_assertClone } from "../../internal/_test_assertClone";

export const test_assertClone_ArrayRepeatedNullable = _test_assertClone(
    "ArrayRepeatedNullable",
    ArrayRepeatedNullable.generate,
    (input) => typia.assertClone(input),
    ArrayRepeatedNullable.SPOILERS,
);
