import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardEqualsCustom_FunctionalArrayUnion =
  _test_assertGuardEquals(CustomGuardError)(
    "FunctionalArrayUnion",
  )<FunctionalArrayUnion>(FunctionalArrayUnion)(
    typia.createAssertGuardEquals<FunctionalArrayUnion>(
      (p) => new CustomGuardError(p),
    ),
  );
