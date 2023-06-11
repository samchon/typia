import typia from "../../../src";

import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";
import { _test_assertClone } from "../../internal/_test_assertClone";

export const test_assertClone_ArrayRepeatedUnion = _test_assertClone(
    "ArrayRepeatedUnion",
    ArrayRepeatedUnion.generate,
    (input) => typia.assertClone(input),
    ArrayRepeatedUnion.SPOILERS,
);
