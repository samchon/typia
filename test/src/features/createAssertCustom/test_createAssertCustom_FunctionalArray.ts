import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { FunctionalArray } from "../../structures/FunctionalArray";

export const test_createAssertCustom_FunctionalArray = _test_assert(
  CustomGuardError,
)("FunctionalArray")<FunctionalArray>(FunctionalArray)(
  typia.createAssert<FunctionalArray>((p) => new CustomGuardError(p)),
);
