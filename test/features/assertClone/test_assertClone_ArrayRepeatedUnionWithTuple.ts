import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

export const test_assertClone_ArrayRepeatedUnionWithTuple = _test_assertClone(
    "ArrayRepeatedUnionWithTuple",
    ArrayRepeatedUnionWithTuple.generate,
    (input) => typia.assertClone(input),
    ArrayRepeatedUnionWithTuple.SPOILERS,
);
