import typia from "../../../src";

import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";
import { _test_assert } from "../../internal/_test_assert";

export const test_assert_ArrayRepeatedRequired = _test_assert(
    "ArrayRepeatedRequired",
    ArrayRepeatedRequired.generate,
    (input) => typia.assert(input),
    ArrayRepeatedRequired.SPOILERS,
);
