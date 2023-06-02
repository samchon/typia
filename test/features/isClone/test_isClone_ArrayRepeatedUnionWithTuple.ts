import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

export const test_isClone_ArrayRepeatedUnionWithTuple = _test_isClone(
    "ArrayRepeatedUnionWithTuple",
    ArrayRepeatedUnionWithTuple.generate,
    (input) => typia.isClone(input),
    ArrayRepeatedUnionWithTuple.SPOILERS,
);
