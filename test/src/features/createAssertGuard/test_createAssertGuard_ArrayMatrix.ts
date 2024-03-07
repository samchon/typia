import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

import { TypeGuardError } from "typia";

export const test_createAssertGuard_ArrayMatrix = _test_assertGuard(
  TypeGuardError,
)("ArrayMatrix")<ArrayMatrix>(ArrayMatrix)(
  typia.createAssertGuard<ArrayMatrix>(),
);
