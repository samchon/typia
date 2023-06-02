import typia from "../../../src";

import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";
import { _test_assertParse } from "../../internal/_test_assertParse";

export const test_createAssertParse_ArrayRepeatedRequired = _test_assertParse(
    "ArrayRepeatedRequired",
    ArrayRepeatedRequired.generate,
    typia.createAssertParse<ArrayRepeatedRequired>(),
    ArrayRepeatedRequired.SPOILERS,
);
