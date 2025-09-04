import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_createAssertGuardCustom_ArrayAtomicSimple = (): void =>
  _test_assertGuard(CustomGuardError)("ArrayAtomicSimple")<ArrayAtomicSimple>(
    ArrayAtomicSimple,
  )(typia.createAssertGuard<ArrayAtomicSimple>((p) => new CustomGuardError(p)));
