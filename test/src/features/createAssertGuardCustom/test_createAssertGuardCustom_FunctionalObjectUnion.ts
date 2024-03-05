import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";

export const test_createAssertGuardCustom_FunctionalObjectUnion =
  _test_assertGuard(CustomGuardError)(
    "FunctionalObjectUnion",
  )<FunctionalObjectUnion>(FunctionalObjectUnion)(
    typia.createAssertGuard<FunctionalObjectUnion>(
      (p) => new CustomGuardError(p),
    ),
  );
