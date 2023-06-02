import typia from "../../../src";

import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";
import { _test_assert } from "../../internal/_test_assert";

export const test_assert_ArrayRepeatedUnion = _test_assert(
    "ArrayRepeatedUnion",
    ArrayRepeatedUnion.generate,
    (input) => typia.assert(input),
    ArrayRepeatedUnion.SPOILERS,
);
