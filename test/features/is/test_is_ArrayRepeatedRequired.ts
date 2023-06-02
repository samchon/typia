import typia from "../../../src";

import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";
import { _test_is } from "../../internal/_test_is";

export const test_is_ArrayRepeatedRequired = _test_is(
    "ArrayRepeatedRequired",
    ArrayRepeatedRequired.generate,
    (input) => typia.is(input),
    ArrayRepeatedRequired.SPOILERS,
);
