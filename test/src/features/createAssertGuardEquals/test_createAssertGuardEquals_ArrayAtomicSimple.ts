import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

import { TypeGuardError } from "typia";

export const test_createAssertGuardEquals_ArrayAtomicSimple = (): void => _test_assertGuardEquals(TypeGuardError)(
    "ArrayAtomicSimple",
)<ArrayAtomicSimple>(
    ArrayAtomicSimple
)(typia.createAssertGuardEquals<ArrayAtomicSimple>());
