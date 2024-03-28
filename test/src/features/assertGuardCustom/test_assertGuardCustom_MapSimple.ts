import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { MapSimple } from "../../structures/MapSimple";

export const test_assertGuardCustom_MapSimple = _test_assertGuard(
  CustomGuardError,
)("MapSimple")<MapSimple>(MapSimple)((input) =>
  typia.assertGuard<MapSimple>(input, (p) => new CustomGuardError(p)),
);
