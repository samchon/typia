import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_FunctionalValueUnion = _test_assert(
  CustomGuardError,
)("FunctionalValueUnion")<FunctionalValueUnion>(FunctionalValueUnion)((input) =>
  typia.assert<FunctionalValueUnion>(input, (p) => new CustomGuardError(p)),
);
