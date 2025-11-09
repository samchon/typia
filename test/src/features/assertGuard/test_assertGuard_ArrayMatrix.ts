import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_assertGuard_ArrayMatrix = (): void =>
  _test_assertGuard(TypeGuardError)("ArrayMatrix")<ArrayMatrix>(ArrayMatrix)(
    (input) => typia.assertGuard<ArrayMatrix>(input),
  );
