import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";

export const test_createAssertGuardEqualsCustom_FunctionalPropertyUnion =
  _test_assertGuardEquals(CustomGuardError)(
    "FunctionalPropertyUnion",
  )<FunctionalPropertyUnion>(FunctionalPropertyUnion)(
    typia.createAssertGuardEquals<FunctionalPropertyUnion>(
      (p) => new CustomGuardError(p),
    ),
  );
