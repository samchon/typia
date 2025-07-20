import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_createAssertGuard_TypeTagRange = (): void =>
  _test_assertGuard(TypeGuardError)("TypeTagRange")<TypeTagRange>(TypeTagRange)(
    typia.createAssertGuard<TypeTagRange>(),
  );
