import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_FunctionalProperty =
  _test_assertGuard(CustomGuardError)("FunctionalProperty")<FunctionalProperty>(
    FunctionalProperty,
  )(
    typia.createAssertGuard<FunctionalProperty>((p) => new CustomGuardError(p)),
  );
