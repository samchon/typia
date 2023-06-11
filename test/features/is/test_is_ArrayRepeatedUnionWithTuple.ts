import typia from "../../../src";

import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";
import { _test_is } from "../../internal/_test_is";

export const test_is_ArrayRepeatedUnionWithTuple = _test_is(
    "ArrayRepeatedUnionWithTuple",
    ArrayRepeatedUnionWithTuple.generate,
    (input) => typia.is(input),
    ArrayRepeatedUnionWithTuple.SPOILERS,
);
