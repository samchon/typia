import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";

import { TypeGuardError } from "typia";

export const test_assertGuardEquals_FunctionalValueUnion =
  _test_assertGuardEquals(TypeGuardError)(
    "FunctionalValueUnion",
  )<FunctionalValueUnion>(FunctionalValueUnion)((input) =>
    typia.assertGuardEquals<FunctionalValueUnion>(input),
  );
