import typia from "../../../src";

import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";
import { _test_assert } from "../../internal/_test_assert";

export const test_createAssert_ArrayRepeatedRequired = _test_assert(
    "ArrayRepeatedRequired",
    ArrayRepeatedRequired.generate,
    typia.createAssert<ArrayRepeatedRequired>(),
    ArrayRepeatedRequired.SPOILERS,
);
