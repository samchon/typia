import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { MapUnion } from "../../structures/MapUnion";

export const test_createAssertGuard_MapUnion = _test_assertGuard(
  TypeGuardError,
)("MapUnion")<MapUnion>(MapUnion)(typia.createAssertGuard<MapUnion>());
