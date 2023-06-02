import typia from "../../../src";

import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";
import { _test_isClone } from "../../internal/_test_isClone";

export const test_isClone_ArrayRepeatedRequired = _test_isClone(
    "ArrayRepeatedRequired",
    ArrayRepeatedRequired.generate,
    (input) => typia.isClone(input),
    ArrayRepeatedRequired.SPOILERS,
);
