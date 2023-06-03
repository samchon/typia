import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

export const test_isParse_ArrayRepeatedUnionWithTuple = _test_isParse(
    "ArrayRepeatedUnionWithTuple",
    ArrayRepeatedUnionWithTuple.generate,
    (input) => typia.isParse<ArrayRepeatedUnionWithTuple>(input),
    ArrayRepeatedUnionWithTuple.SPOILERS,
);
