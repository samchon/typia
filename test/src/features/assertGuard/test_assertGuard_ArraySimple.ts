import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_assertGuard_ArraySimple = (): void =>
  _test_assertGuard(TypeGuardError)("ArraySimple")<ArraySimple>(ArraySimple)(
    (input) => typia.assertGuard<ArraySimple>(input),
  );
