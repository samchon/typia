import typia from "../../../src";

import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";
import { _test_assertClone } from "../../internal/_test_assertClone";

export const test_createAssertClone_ArrayRepeatedRequired = _test_assertClone(
    "ArrayRepeatedRequired",
    ArrayRepeatedRequired.generate,
    typia.createAssertClone<ArrayRepeatedRequired>(),
    ArrayRepeatedRequired.SPOILERS,
);
