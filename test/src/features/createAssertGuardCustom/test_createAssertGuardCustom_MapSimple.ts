import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { MapSimple } from "../../structures/MapSimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_MapSimple = _test_assertGuard(
  CustomGuardError,
)("MapSimple")<MapSimple>(MapSimple)(
  typia.createAssertGuard<MapSimple>((p) => new CustomGuardError(p)),
);
