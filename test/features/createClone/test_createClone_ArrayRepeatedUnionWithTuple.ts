import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

export const test_createClone_ArrayRepeatedUnionWithTuple = _test_clone(
    "ArrayRepeatedUnionWithTuple",
    ArrayRepeatedUnionWithTuple.generate,
    typia.createClone<ArrayRepeatedUnionWithTuple>(),
);
