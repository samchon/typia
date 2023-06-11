import typia from "../../../src";

import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";
import { _test_validateClone } from "../../internal/_test_validateClone";

export const test_validateClone_ArrayRepeatedRequired = _test_validateClone(
    "ArrayRepeatedRequired",
    ArrayRepeatedRequired.generate,
    (input) => typia.validateClone(input),
    ArrayRepeatedRequired.SPOILERS,
);
