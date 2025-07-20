import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_createAssertGuard_ArrayAtomicAlias = (): void =>
  _test_assertGuard(TypeGuardError)("ArrayAtomicAlias")<ArrayAtomicAlias>(
    ArrayAtomicAlias,
  )(typia.createAssertGuard<ArrayAtomicAlias>());
