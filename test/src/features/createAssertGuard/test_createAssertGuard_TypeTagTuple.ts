import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_createAssertGuard_TypeTagTuple = (): void =>
  _test_assertGuard(TypeGuardError)("TypeTagTuple")<TypeTagTuple>(TypeTagTuple)(
    typia.createAssertGuard<TypeTagTuple>(),
  );
