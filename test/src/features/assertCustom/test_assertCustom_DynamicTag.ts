import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { DynamicTag } from "../../structures/DynamicTag";

export const test_assertCustom_DynamicTag = _test_assert(CustomGuardError)(
  "DynamicTag",
)<DynamicTag>(DynamicTag)((input) =>
  typia.assert<DynamicTag>(input, (p) => new CustomGuardError(p)),
);
