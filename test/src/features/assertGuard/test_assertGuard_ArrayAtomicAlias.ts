import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_assertGuard_ArrayAtomicAlias = _test_assertGuard(
  TypeGuardError,
)("ArrayAtomicAlias")<ArrayAtomicAlias>(ArrayAtomicAlias)((input) =>
  typia.assertGuard<ArrayAtomicAlias>(input),
);
