import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";

export const test_createAssertGuardCustom_FunctionalArrayUnion =
  _test_assertGuard(CustomGuardError)(
    "FunctionalArrayUnion",
  )<FunctionalArrayUnion>(FunctionalArrayUnion)(
    typia.createAssertGuard<FunctionalArrayUnion>(
      (p) => new CustomGuardError(p),
    ),
  );
