import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_createAssertGuardEquals_TypeTagMatrix = (): void =>
  _test_assertGuardEquals(TypeGuardError)("TypeTagMatrix")<TypeTagMatrix>(
    TypeTagMatrix,
  )(typia.createAssertGuardEquals<TypeTagMatrix>());
