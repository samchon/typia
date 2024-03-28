import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

export const test_createAssert_FunctionalTuple = _test_assert(TypeGuardError)(
  "FunctionalTuple",
)<FunctionalTuple>(FunctionalTuple)(typia.createAssert<FunctionalTuple>());
