import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_createAssertGuard_ArrayAtomicSimple = (): void =>
  _test_assertGuard(TypeGuardError)("ArrayAtomicSimple")<ArrayAtomicSimple>(
    ArrayAtomicSimple,
  )(typia.createAssertGuard<ArrayAtomicSimple>());
