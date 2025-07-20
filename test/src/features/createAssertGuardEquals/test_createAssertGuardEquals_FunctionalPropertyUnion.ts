import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";

export const test_createAssertGuardEquals_FunctionalPropertyUnion = (): void =>
  _test_assertGuardEquals(TypeGuardError)(
    "FunctionalPropertyUnion",
  )<FunctionalPropertyUnion>(FunctionalPropertyUnion)(
    typia.createAssertGuardEquals<FunctionalPropertyUnion>(),
  );
