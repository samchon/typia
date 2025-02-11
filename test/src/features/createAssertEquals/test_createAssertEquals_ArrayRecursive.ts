import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

import { TypeGuardError } from "typia";

export const test_createAssertEquals_ArrayRecursive = _test_assertEquals(TypeGuardError)(
    "ArrayRecursive",
)<ArrayRecursive>(
    ArrayRecursive
)(typia.createAssertEquals<ArrayRecursive>());
