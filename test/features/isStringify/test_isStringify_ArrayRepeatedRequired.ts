import typia from "../../../src";

import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";
import { _test_isStringify } from "../../internal/_test_isStringify";

export const test_isStringify_ArrayRepeatedRequired = _test_isStringify(
    "ArrayRepeatedRequired",
    ArrayRepeatedRequired.generate,
    (input) => typia.isStringify(input),
    ArrayRepeatedRequired.SPOILERS,
);
