import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

import { TypeGuardError } from "typia";

export const test_createAssert_ArrayMatrix = _test_assert(TypeGuardError)(
    "ArrayMatrix",
)<ArrayMatrix>(
    ArrayMatrix
)(typia.createAssert<ArrayMatrix>());
