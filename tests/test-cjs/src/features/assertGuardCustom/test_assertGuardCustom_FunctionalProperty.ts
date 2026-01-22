import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

export const test_assertGuardCustom_FunctionalProperty = (): void =>
  _test_assertGuard(CustomGuardError)("FunctionalProperty")<FunctionalProperty>(
    FunctionalProperty,
  )((input) =>
    typia.assertGuard<FunctionalProperty>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
