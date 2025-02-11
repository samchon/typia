import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

export const test_assertCustom_FunctionalTuple = _test_assert(CustomGuardError)(
  "FunctionalTuple",
)<FunctionalTuple>(FunctionalTuple)((input) =>
  typia.assert<FunctionalTuple>(input, (p) => new CustomGuardError(p)),
);
