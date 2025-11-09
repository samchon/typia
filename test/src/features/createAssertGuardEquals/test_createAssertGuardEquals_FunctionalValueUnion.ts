import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";

export const test_createAssertGuardEquals_FunctionalValueUnion = (): void =>
  _test_assertGuardEquals(TypeGuardError)(
    "FunctionalValueUnion",
  )<FunctionalValueUnion>(FunctionalValueUnion)(
    typia.createAssertGuardEquals<FunctionalValueUnion>(),
  );
