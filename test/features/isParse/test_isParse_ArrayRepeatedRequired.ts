import typia from "../../../src";

import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";
import { _test_isParse } from "../../internal/_test_isParse";

export const test_isParse_ArrayRepeatedRequired = _test_isParse(
    "ArrayRepeatedRequired",
    ArrayRepeatedRequired.generate,
    (input) => typia.isParse<ArrayRepeatedRequired>(input),
    ArrayRepeatedRequired.SPOILERS,
);
