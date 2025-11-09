import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_ArrayMatrix = (): void => _test_assertGuard(CustomGuardError)(
    "ArrayMatrix",
)<ArrayMatrix>(
    ArrayMatrix
)((input) => typia.assertGuard<ArrayMatrix>(input, (p) => new CustomGuardError(p)));
