import typia from "../../../src";

import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";
import { _test_isClone } from "../../internal/_test_isClone";

export const test_isClone_ArrayRepeatedUnion = _test_isClone(
    "ArrayRepeatedUnion",
    ArrayRepeatedUnion.generate,
    (input) => typia.isClone(input),
    ArrayRepeatedUnion.SPOILERS,
);
