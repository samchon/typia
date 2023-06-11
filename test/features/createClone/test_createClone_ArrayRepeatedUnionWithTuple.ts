import typia from "../../../src";

import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";
import { _test_clone } from "../../internal/_test_clone";

export const test_createClone_ArrayRepeatedUnionWithTuple = _test_clone(
    "ArrayRepeatedUnionWithTuple",
    ArrayRepeatedUnionWithTuple.generate,
    typia.createClone<ArrayRepeatedUnionWithTuple>(),
);
