import typia from "../../../src";

import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";
import { _test_isStringify } from "../../internal/_test_isStringify";

export const test_createIsStringify_ArrayRepeatedRequired = _test_isStringify(
    "ArrayRepeatedRequired",
    ArrayRepeatedRequired.generate,
    typia.createIsStringify<ArrayRepeatedRequired>(),
    ArrayRepeatedRequired.SPOILERS,
);
