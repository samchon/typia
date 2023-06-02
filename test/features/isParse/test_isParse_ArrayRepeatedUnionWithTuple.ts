import typia from "../../../src";

import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";
import { _test_isParse } from "../../internal/_test_isParse";

export const test_isParse_ArrayRepeatedUnionWithTuple = _test_isParse(
    "ArrayRepeatedUnionWithTuple",
    ArrayRepeatedUnionWithTuple.generate,
    (input) => typia.isParse<ArrayRepeatedUnionWithTuple>(input),
    ArrayRepeatedUnionWithTuple.SPOILERS,
);
