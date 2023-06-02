import typia from "../../../src";

import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";
import { _test_validateClone } from "../../internal/_test_validateClone";

export const test_createValidateClone_ArrayRepeatedRequired = _test_validateClone(
    "ArrayRepeatedRequired",
    ArrayRepeatedRequired.generate,
    typia.createValidateClone<ArrayRepeatedRequired>(),
    ArrayRepeatedRequired.SPOILERS,
);
