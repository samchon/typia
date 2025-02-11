import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";

export const test_assertCustom_FunctionalArrayUnion = _test_assert(
  CustomGuardError,
)("FunctionalArrayUnion")<FunctionalArrayUnion>(FunctionalArrayUnion)((input) =>
  typia.assert<FunctionalArrayUnion>(input, (p) => new CustomGuardError(p)),
);
