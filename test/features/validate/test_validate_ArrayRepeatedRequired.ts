import typia from "../../../src";

import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";
import { _test_validate } from "../../internal/_test_validate";

export const test_validate_ArrayRepeatedRequired = _test_validate(
    "ArrayRepeatedRequired",
    ArrayRepeatedRequired.generate,
    (input) => typia.validate(input),
    ArrayRepeatedRequired.SPOILERS,
);
