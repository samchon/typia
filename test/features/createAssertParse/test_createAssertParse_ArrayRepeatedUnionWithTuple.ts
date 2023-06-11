import typia from "../../../src";

import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";
import { _test_assertParse } from "../../internal/_test_assertParse";

export const test_createAssertParse_ArrayRepeatedUnionWithTuple = _test_assertParse(
    "ArrayRepeatedUnionWithTuple",
    ArrayRepeatedUnionWithTuple.generate,
    typia.createAssertParse<ArrayRepeatedUnionWithTuple>(),
    ArrayRepeatedUnionWithTuple.SPOILERS,
);
