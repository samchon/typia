import typia from "../../../src";

import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";
import { _test_assert } from "../../internal/_test_assert";

export const test_createAssert_ArrayRepeatedUnion = _test_assert(
    "ArrayRepeatedUnion",
    ArrayRepeatedUnion.generate,
    typia.createAssert<ArrayRepeatedUnion>(),
    ArrayRepeatedUnion.SPOILERS,
);
