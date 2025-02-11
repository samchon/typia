import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

import { TypeGuardError } from "typia";

export const test_createAssertEquals_ArrayMatrix = _test_assertEquals(TypeGuardError)(
    "ArrayMatrix",
)<ArrayMatrix>(
    ArrayMatrix
)(typia.createAssertEquals<ArrayMatrix>());
