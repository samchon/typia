import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

import { TypeGuardError } from "typia";

export const test_createAssertGuardEquals_ArrayMatrix = _test_assertGuardEquals(TypeGuardError)(
    "ArrayMatrix",
)<ArrayMatrix>(
    ArrayMatrix
)(typia.createAssertGuardEquals<ArrayMatrix>());
