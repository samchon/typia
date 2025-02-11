import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_ArrayMatrix = _test_assert(CustomGuardError)(
    "ArrayMatrix",
)<ArrayMatrix>(
    ArrayMatrix
)(typia.createAssert<ArrayMatrix>((p) => new CustomGuardError(p)));
