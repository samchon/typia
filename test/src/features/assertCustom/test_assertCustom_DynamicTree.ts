import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_assertCustom_DynamicTree = _test_assert(CustomGuardError)(
  "DynamicTree",
)<DynamicTree>(DynamicTree)((input) =>
  typia.assert<DynamicTree>(input, (p) => new CustomGuardError(p)),
);
