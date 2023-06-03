import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

export const test_createIsParse_ArrayRepeatedUnionWithTuple = _test_isParse(
    "ArrayRepeatedUnionWithTuple",
    ArrayRepeatedUnionWithTuple.generate,
    typia.createIsParse<ArrayRepeatedUnionWithTuple>(),
    ArrayRepeatedUnionWithTuple.SPOILERS,
);
