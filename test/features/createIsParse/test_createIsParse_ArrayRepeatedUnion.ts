import typia from "../../../src";

import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";
import { _test_isParse } from "../../internal/_test_isParse";

export const test_createIsParse_ArrayRepeatedUnion = _test_isParse(
    "ArrayRepeatedUnion",
    ArrayRepeatedUnion.generate,
    typia.createIsParse<ArrayRepeatedUnion>(),
    ArrayRepeatedUnion.SPOILERS,
);
