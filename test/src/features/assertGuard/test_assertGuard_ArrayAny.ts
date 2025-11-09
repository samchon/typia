import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_assertGuard_ArrayAny = (): void =>
  _test_assertGuard(TypeGuardError)("ArrayAny")<ArrayAny>(ArrayAny)((input) =>
    typia.assertGuard<ArrayAny>(input),
  );
