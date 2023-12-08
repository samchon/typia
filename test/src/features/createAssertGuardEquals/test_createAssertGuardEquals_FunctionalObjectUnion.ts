import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";

export const test_createAssertGuardEquals_FunctionalObjectUnion =
  _test_assertGuardEquals("FunctionalObjectUnion")<FunctionalObjectUnion>(
    FunctionalObjectUnion,
  )(typia.createAssertGuardEquals<FunctionalObjectUnion>());
