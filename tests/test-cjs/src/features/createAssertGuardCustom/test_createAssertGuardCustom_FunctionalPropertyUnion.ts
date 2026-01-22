import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";

export const test_createAssertGuardCustom_FunctionalPropertyUnion = (): void =>
  _test_assertGuard(CustomGuardError)(
    "FunctionalPropertyUnion",
  )<FunctionalPropertyUnion>(FunctionalPropertyUnion)(
    typia.createAssertGuard<FunctionalPropertyUnion>(
      (p) => new CustomGuardError(p),
    ),
  );
