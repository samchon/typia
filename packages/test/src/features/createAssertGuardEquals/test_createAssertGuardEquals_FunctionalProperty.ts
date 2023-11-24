import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

export const test_createAssertGuardEquals_FunctionalProperty =
  _test_assertGuardEquals("FunctionalProperty")<FunctionalProperty>(
    FunctionalProperty,
  )(typia.createAssertGuardEquals<FunctionalProperty>());
