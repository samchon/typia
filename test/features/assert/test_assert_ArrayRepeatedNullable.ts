import typia from "../../../src";

import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";
import { _test_assert } from "../../internal/_test_assert";

export const test_assert_ArrayRepeatedNullable = _test_assert(
    "ArrayRepeatedNullable",
    ArrayRepeatedNullable.generate,
    (input) => typia.assert(input),
    ArrayRepeatedNullable.SPOILERS,
);
