import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";

export const test_assertGuardCustom_FunctionalPropertyUnion = (): void =>
  _test_assertGuard(CustomGuardError)(
    "FunctionalPropertyUnion",
  )<FunctionalPropertyUnion>(FunctionalPropertyUnion)((input) =>
    typia.assertGuard<FunctionalPropertyUnion>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
