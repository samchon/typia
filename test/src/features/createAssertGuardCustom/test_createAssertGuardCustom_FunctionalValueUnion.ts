import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";

export const test_createAssertGuardCustom_FunctionalValueUnion =
  _test_assertGuard(CustomGuardError)(
    "FunctionalValueUnion",
  )<FunctionalValueUnion>(FunctionalValueUnion)(
    typia.createAssertGuard<FunctionalValueUnion>(
      (p) => new CustomGuardError(p),
    ),
  );
