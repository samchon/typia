import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_createAssertCustom_ToJsonTuple = _test_assert(
  CustomGuardError,
)("ToJsonTuple")<ToJsonTuple>(ToJsonTuple)(
  typia.createAssert<ToJsonTuple>((p) => new CustomGuardError(p)),
);
