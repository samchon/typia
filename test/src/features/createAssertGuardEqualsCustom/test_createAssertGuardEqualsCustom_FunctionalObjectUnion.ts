import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";

export const test_createAssertGuardEqualsCustom_FunctionalObjectUnion =
  _test_assertGuardEquals(CustomGuardError)(
    "FunctionalObjectUnion",
  )<FunctionalObjectUnion>(FunctionalObjectUnion)(
    typia.createAssertGuardEquals<FunctionalObjectUnion>(
      (p) => new CustomGuardError(p),
    ),
  );
