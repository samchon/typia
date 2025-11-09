import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_ArrayAtomicSimple = (): void => _test_assertGuard(CustomGuardError)(
    "ArrayAtomicSimple",
)<ArrayAtomicSimple>(
    ArrayAtomicSimple
)((input) => typia.assertGuard<ArrayAtomicSimple>(input, (p) => new CustomGuardError(p)));
