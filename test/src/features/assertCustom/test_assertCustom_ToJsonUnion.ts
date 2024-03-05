import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_assertCustom_ToJsonUnion = _test_assert(CustomGuardError)(
  "ToJsonUnion",
)<ToJsonUnion>(ToJsonUnion)((input) =>
  typia.assert<ToJsonUnion>(input, (p) => new CustomGuardError(p)),
);
