import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

export const test_createAssertGuardEqualsCustom_FunctionalProperty = (): void =>
  _test_assertGuardEquals(CustomGuardError)(
    "FunctionalProperty",
  )<FunctionalProperty>(FunctionalProperty)(
    typia.createAssertGuardEquals<FunctionalProperty>(
      (p) => new CustomGuardError(p),
    ),
  );
