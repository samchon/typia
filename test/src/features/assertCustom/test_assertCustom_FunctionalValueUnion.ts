import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";

export const test_assertCustom_FunctionalValueUnion = _test_assert(
  CustomGuardError,
)("FunctionalValueUnion")<FunctionalValueUnion>(FunctionalValueUnion)((input) =>
  typia.assert<FunctionalValueUnion>(input, (p) => new CustomGuardError(p)),
);
