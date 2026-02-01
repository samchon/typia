import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_createIs_ArrayRecursive = (): void => _test_is(
    "ArrayRecursive",
)<ArrayRecursive>(
    ArrayRecursive
)(typia.createIs<ArrayRecursive>());
