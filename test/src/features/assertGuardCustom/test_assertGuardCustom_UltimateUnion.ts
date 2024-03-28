import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_assertGuardCustom_UltimateUnion = _test_assertGuard(
  CustomGuardError,
)("UltimateUnion")<UltimateUnion>(UltimateUnion)((input) =>
  typia.assertGuard<UltimateUnion>(input, (p) => new CustomGuardError(p)),
);
