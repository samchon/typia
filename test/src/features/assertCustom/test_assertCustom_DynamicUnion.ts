import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_assertCustom_DynamicUnion = _test_assert(CustomGuardError)(
  "DynamicUnion",
)<DynamicUnion>(DynamicUnion)((input) =>
  typia.assert<DynamicUnion>(input, (p) => new CustomGuardError(p)),
);
