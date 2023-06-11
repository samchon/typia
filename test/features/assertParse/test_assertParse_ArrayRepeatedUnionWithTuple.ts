import typia from "../../../src";

import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";
import { _test_assertParse } from "../../internal/_test_assertParse";

export const test_assertParse_ArrayRepeatedUnionWithTuple = _test_assertParse(
    "ArrayRepeatedUnionWithTuple",
    ArrayRepeatedUnionWithTuple.generate,
    (input) => typia.assertParse<ArrayRepeatedUnionWithTuple>(input),
    ArrayRepeatedUnionWithTuple.SPOILERS,
);
