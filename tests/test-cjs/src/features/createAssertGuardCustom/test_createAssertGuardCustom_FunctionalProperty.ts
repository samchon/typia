import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

export const test_createAssertGuardCustom_FunctionalProperty = (): void =>
  _test_assertGuard(CustomGuardError)("FunctionalProperty")<FunctionalProperty>(
    FunctionalProperty,
  )(
    typia.createAssertGuard<FunctionalProperty>((p) => new CustomGuardError(p)),
  );
