import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";

export const test_createAssertGuard_FunctionalValueUnion = (): void =>
  _test_assertGuard(TypeGuardError)(
    "FunctionalValueUnion",
  )<FunctionalValueUnion>(FunctionalValueUnion)(
    typia.createAssertGuard<FunctionalValueUnion>(),
  );
