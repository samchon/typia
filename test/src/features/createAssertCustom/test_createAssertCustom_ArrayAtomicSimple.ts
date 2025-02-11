import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_ArrayAtomicSimple = _test_assert(CustomGuardError)(
    "ArrayAtomicSimple",
)<ArrayAtomicSimple>(
    ArrayAtomicSimple
)(typia.createAssert<ArrayAtomicSimple>((p) => new CustomGuardError(p)));
