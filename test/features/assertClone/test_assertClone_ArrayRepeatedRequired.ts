import typia from "../../../src";

import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";
import { _test_assertClone } from "../../internal/_test_assertClone";

export const test_assertClone_ArrayRepeatedRequired = _test_assertClone(
    "ArrayRepeatedRequired",
    ArrayRepeatedRequired.generate,
    (input) => typia.assertClone(input),
    ArrayRepeatedRequired.SPOILERS,
);
