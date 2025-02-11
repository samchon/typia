import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_createAssertGuard_TypeTagMatrix = _test_assertGuard(
  TypeGuardError,
)("TypeTagMatrix")<TypeTagMatrix>(TypeTagMatrix)(
  typia.createAssertGuard<TypeTagMatrix>(),
);
