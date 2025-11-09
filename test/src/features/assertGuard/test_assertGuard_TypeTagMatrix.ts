import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_assertGuard_TypeTagMatrix = (): void =>
  _test_assertGuard(TypeGuardError)("TypeTagMatrix")<TypeTagMatrix>(
    TypeTagMatrix,
  )((input) => typia.assertGuard<TypeTagMatrix>(input));
