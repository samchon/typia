import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

export const test_createAssertGuardEquals_FunctionalTuple =
  _test_assertGuardEquals("FunctionalTuple")<FunctionalTuple>(FunctionalTuple)(
    typia.createAssertGuardEquals<FunctionalTuple>(),
  );
