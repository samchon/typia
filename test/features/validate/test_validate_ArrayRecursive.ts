import typia from "../../../src";

import { ArrayRecursive } from "../../structures/ArrayRecursive";
import { _test_validate } from "../../internal/_test_validate";

export const test_validate_ArrayRecursive = _test_validate(
    "ArrayRecursive",
    ArrayRecursive.generate,
    (input) => typia.validate(input),
    ArrayRecursive.SPOILERS,
);
