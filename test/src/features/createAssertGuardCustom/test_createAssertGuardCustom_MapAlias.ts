import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { MapAlias } from "../../structures/MapAlias";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_MapAlias = _test_assertGuard(
  CustomGuardError,
)("MapAlias")<MapAlias>(MapAlias)(
  typia.createAssertGuard<MapAlias>((p) => new CustomGuardError(p)),
);
