import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";

export const test_createAssertGuardEquals_FunctionalArrayUnion =
  _test_assertGuardEquals(TypeGuardError)(
    "FunctionalArrayUnion",
  )<FunctionalArrayUnion>(FunctionalArrayUnion)(
    typia.createAssertGuardEquals<FunctionalArrayUnion>(),
  );
