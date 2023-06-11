import typia from "../../../src";

import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";
import { _test_isClone } from "../../internal/_test_isClone";

export const test_isClone_ArrayRepeatedUnionWithTuple = _test_isClone(
    "ArrayRepeatedUnionWithTuple",
    ArrayRepeatedUnionWithTuple.generate,
    (input) => typia.isClone(input),
    ArrayRepeatedUnionWithTuple.SPOILERS,
);
