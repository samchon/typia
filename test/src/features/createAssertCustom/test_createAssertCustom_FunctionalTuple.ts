import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_FunctionalTuple = _test_assert(
  CustomGuardError,
)("FunctionalTuple")<FunctionalTuple>(FunctionalTuple)(
  typia.createAssert<FunctionalTuple>((p) => new CustomGuardError(p)),
);
