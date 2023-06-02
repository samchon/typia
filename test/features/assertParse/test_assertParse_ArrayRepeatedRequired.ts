import typia from "../../../src";

import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";
import { _test_assertParse } from "../../internal/_test_assertParse";

export const test_assertParse_ArrayRepeatedRequired = _test_assertParse(
    "ArrayRepeatedRequired",
    ArrayRepeatedRequired.generate,
    (input) => typia.assertParse<ArrayRepeatedRequired>(input),
    ArrayRepeatedRequired.SPOILERS,
);
