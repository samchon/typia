import typia from "../../../src";

import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";
import { _test_assertParse } from "../../internal/_test_assertParse";

export const test_createAssertParse_ArrayRepeatedUnion = _test_assertParse(
    "ArrayRepeatedUnion",
    ArrayRepeatedUnion.generate,
    typia.createAssertParse<ArrayRepeatedUnion>(),
    ArrayRepeatedUnion.SPOILERS,
);
