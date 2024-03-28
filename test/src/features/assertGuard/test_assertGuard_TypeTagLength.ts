import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_assertGuard_TypeTagLength = _test_assertGuard(TypeGuardError)(
  "TypeTagLength",
)<TypeTagLength>(TypeTagLength)((input) =>
  typia.assertGuard<TypeTagLength>(input),
);
