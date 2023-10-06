import typia from "../../../src";

import { _test_validate } from "../../internal/_test_validate";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_validate_ArrayRecursive = _test_validate(
    "ArrayRecursive",
)<ArrayRecursive>(
    ArrayRecursive
)((input) => typia.validate<ArrayRecursive>(input));
