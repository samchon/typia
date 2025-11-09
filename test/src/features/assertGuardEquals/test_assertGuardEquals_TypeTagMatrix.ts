import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_assertGuardEquals_TypeTagMatrix = (): void =>
  _test_assertGuardEquals(TypeGuardError)("TypeTagMatrix")<TypeTagMatrix>(
    TypeTagMatrix,
  )((input) => typia.assertGuardEquals<TypeTagMatrix>(input));
