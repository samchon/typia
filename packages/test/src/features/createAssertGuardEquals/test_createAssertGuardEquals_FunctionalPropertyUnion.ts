import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";

export const test_createAssertGuardEquals_FunctionalPropertyUnion =
  _test_assertGuardEquals("FunctionalPropertyUnion")<FunctionalPropertyUnion>(
    FunctionalPropertyUnion,
  )(typia.createAssertGuardEquals<FunctionalPropertyUnion>());
