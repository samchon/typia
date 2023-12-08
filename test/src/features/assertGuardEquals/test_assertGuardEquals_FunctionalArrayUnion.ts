import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";

export const test_assertGuardEquals_FunctionalArrayUnion =
  _test_assertGuardEquals("FunctionalArrayUnion")<FunctionalArrayUnion>(
    FunctionalArrayUnion,
  )((input) => typia.assertGuardEquals<FunctionalArrayUnion>(input));
