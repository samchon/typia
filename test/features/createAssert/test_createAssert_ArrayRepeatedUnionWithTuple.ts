import typia from "../../../src";

import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";
import { _test_assert } from "../../internal/_test_assert";

export const test_createAssert_ArrayRepeatedUnionWithTuple = _test_assert(
    "ArrayRepeatedUnionWithTuple",
    ArrayRepeatedUnionWithTuple.generate,
    typia.createAssert<ArrayRepeatedUnionWithTuple>(),
    ArrayRepeatedUnionWithTuple.SPOILERS,
);
