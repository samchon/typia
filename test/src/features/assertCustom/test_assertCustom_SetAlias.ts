import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { SetAlias } from "../../structures/SetAlias";

export const test_assertCustom_SetAlias = _test_assert(CustomGuardError)(
  "SetAlias",
)<SetAlias>(SetAlias)((input) =>
  typia.assert<SetAlias>(input, (p) => new CustomGuardError(p)),
);
