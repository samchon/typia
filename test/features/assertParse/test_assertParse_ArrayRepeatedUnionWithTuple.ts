import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

export const test_assertParse_ArrayRepeatedUnionWithTuple = _test_assertParse(
    "ArrayRepeatedUnionWithTuple",
    ArrayRepeatedUnionWithTuple.generate,
    (input) => typia.assertParse<ArrayRepeatedUnionWithTuple>(input),
    ArrayRepeatedUnionWithTuple.SPOILERS,
);
