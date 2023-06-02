import typia from "../../../src";

import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";
import { _test_assertParse } from "../../internal/_test_assertParse";

export const test_assertParse_ArrayRepeatedUnion = _test_assertParse(
    "ArrayRepeatedUnion",
    ArrayRepeatedUnion.generate,
    (input) => typia.assertParse<ArrayRepeatedUnion>(input),
    ArrayRepeatedUnion.SPOILERS,
);
