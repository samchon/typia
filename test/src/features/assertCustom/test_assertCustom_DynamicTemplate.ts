import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_DynamicTemplate = _test_assert(CustomGuardError)(
  "DynamicTemplate",
)<DynamicTemplate>(DynamicTemplate)((input) =>
  typia.assert<DynamicTemplate>(input, (p) => new CustomGuardError(p)),
);
