import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardEqualsCustom_ArrayMatrix = (): void => _test_assertGuardEquals(CustomGuardError)(
    "ArrayMatrix",
)<ArrayMatrix>(
    ArrayMatrix
)((input) => typia.assertGuardEquals<ArrayMatrix>(input, (p) => new CustomGuardError(p)));
