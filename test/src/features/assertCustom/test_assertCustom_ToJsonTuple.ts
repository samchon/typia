import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_assertCustom_ToJsonTuple = _test_assert(CustomGuardError)(
  "ToJsonTuple",
)<ToJsonTuple>(ToJsonTuple)((input) =>
  typia.assert<ToJsonTuple>(input, (p) => new CustomGuardError(p)),
);
