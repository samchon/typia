import typia from "../../../src";

import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";
import { _test_isClone } from "../../internal/_test_isClone";

export const test_createIsClone_ArrayRepeatedUnion = _test_isClone(
    "ArrayRepeatedUnion",
    ArrayRepeatedUnion.generate,
    typia.createIsClone<ArrayRepeatedUnion>(),
    ArrayRepeatedUnion.SPOILERS,
);
