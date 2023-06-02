import typia from "../../../src";

import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";
import { _test_is } from "../../internal/_test_is";

export const test_is_ArrayRepeatedNullable = _test_is(
    "ArrayRepeatedNullable",
    ArrayRepeatedNullable.generate,
    (input) => typia.is(input),
    ArrayRepeatedNullable.SPOILERS,
);
