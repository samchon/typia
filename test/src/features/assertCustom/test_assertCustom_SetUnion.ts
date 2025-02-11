import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { SetUnion } from "../../structures/SetUnion";

export const test_assertCustom_SetUnion = _test_assert(CustomGuardError)(
  "SetUnion",
)<SetUnion>(SetUnion)((input) =>
  typia.assert<SetUnion>(input, (p) => new CustomGuardError(p)),
);
