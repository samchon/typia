import typia from "../../../src";

import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";
import { _test_assertClone } from "../../internal/_test_assertClone";

export const test_assertClone_ArrayRepeatedUnionWithTuple = _test_assertClone(
    "ArrayRepeatedUnionWithTuple",
    ArrayRepeatedUnionWithTuple.generate,
    (input) => typia.assertClone(input),
    ArrayRepeatedUnionWithTuple.SPOILERS,
);
