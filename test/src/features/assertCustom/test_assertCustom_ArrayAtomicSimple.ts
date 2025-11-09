import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_ArrayAtomicSimple = (): void => _test_assert(CustomGuardError)(
    "ArrayAtomicSimple",
)<ArrayAtomicSimple>(
    ArrayAtomicSimple
)((input) => typia.assert<ArrayAtomicSimple>(input, (p) => new CustomGuardError(p)));
