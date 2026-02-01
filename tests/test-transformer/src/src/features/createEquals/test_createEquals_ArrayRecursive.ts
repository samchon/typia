import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_createEquals_ArrayRecursive = (): void => _test_equals(
    "ArrayRecursive",
)<ArrayRecursive>(
    ArrayRecursive
)(typia.createEquals<ArrayRecursive>());
