import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

import { TypeGuardError } from "typia";

export const test_createAssert_FunctionalTuple = _test_assert(TypeGuardError)(
  "FunctionalTuple",
)<FunctionalTuple>(FunctionalTuple)(typia.createAssert<FunctionalTuple>());
