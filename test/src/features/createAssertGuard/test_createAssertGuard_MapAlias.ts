import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { MapAlias } from "../../structures/MapAlias";

import { TypeGuardError } from "typia";

export const test_createAssertGuard_MapAlias = _test_assertGuard(
  TypeGuardError,
)("MapAlias")<MapAlias>(MapAlias)(typia.createAssertGuard<MapAlias>());
