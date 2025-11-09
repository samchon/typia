import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";

export const test_createAssertGuard_FunctionalObjectUnion = (): void =>
  _test_assertGuard(TypeGuardError)(
    "FunctionalObjectUnion",
  )<FunctionalObjectUnion>(FunctionalObjectUnion)(
    typia.createAssertGuard<FunctionalObjectUnion>(),
  );
