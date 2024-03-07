import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

import { TypeGuardError } from "typia";

export const test_assertGuard_TypeTagMatrix = _test_assertGuard(TypeGuardError)(
  "TypeTagMatrix",
)<TypeTagMatrix>(TypeTagMatrix)((input) =>
  typia.assertGuard<TypeTagMatrix>(input),
);
