import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { FunctionalArray } from "../../structures/FunctionalArray";

export const test_createAssertGuardEquals_FunctionalArray =
  _test_assertGuardEquals(TypeGuardError)("FunctionalArray")<FunctionalArray>(
    FunctionalArray,
  )(typia.createAssertGuardEquals<FunctionalArray>());
