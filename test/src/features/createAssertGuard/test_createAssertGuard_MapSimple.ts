import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { MapSimple } from "../../structures/MapSimple";

export const test_createAssertGuard_MapSimple = _test_assertGuard(
  TypeGuardError,
)("MapSimple")<MapSimple>(MapSimple)(typia.createAssertGuard<MapSimple>());
