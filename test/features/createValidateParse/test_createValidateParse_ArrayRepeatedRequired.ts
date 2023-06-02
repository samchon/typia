import typia from "../../../src";

import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";
import { _test_validateParse } from "../../internal/_test_validateParse";

export const test_createValidateParse_ArrayRepeatedRequired = _test_validateParse(
    "ArrayRepeatedRequired",
    ArrayRepeatedRequired.generate,
    typia.createValidateParse<ArrayRepeatedRequired>(),
    ArrayRepeatedRequired.SPOILERS,
);
