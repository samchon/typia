import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

export const test_assert_FunctionalTuple = (): void =>
  _test_assert(TypeGuardError)("FunctionalTuple")<FunctionalTuple>(
    FunctionalTuple,
  )((input) => typia.assert<FunctionalTuple>(input));
