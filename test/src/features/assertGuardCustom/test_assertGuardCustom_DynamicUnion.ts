import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_assertGuardCustom_DynamicUnion = _test_assertGuard(
  CustomGuardError,
)("DynamicUnion")<DynamicUnion>(DynamicUnion)((input) =>
  typia.assertGuard<DynamicUnion>(input, (p) => new CustomGuardError(p)),
);
