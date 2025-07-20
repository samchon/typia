import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { SetSimple } from "../../structures/SetSimple";

export const test_assertGuard_SetSimple = (): void =>
  _test_assertGuard(TypeGuardError)("SetSimple")<SetSimple>(SetSimple)(
    (input) => typia.assertGuard<SetSimple>(input),
  );
