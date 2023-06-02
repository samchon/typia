import typia from "../../../src";

import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";
import { _test_validate } from "../../internal/_test_validate";

export const test_createValidate_ArrayRepeatedRequired = _test_validate(
    "ArrayRepeatedRequired",
    ArrayRepeatedRequired.generate,
    typia.createValidate<ArrayRepeatedRequired>(),
    ArrayRepeatedRequired.SPOILERS,
);
