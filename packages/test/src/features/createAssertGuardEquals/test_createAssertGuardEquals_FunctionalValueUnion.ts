import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";

export const test_createAssertGuardEquals_FunctionalValueUnion =
  _test_assertGuardEquals("FunctionalValueUnion")<FunctionalValueUnion>(
    FunctionalValueUnion,
  )(typia.createAssertGuardEquals<FunctionalValueUnion>());
