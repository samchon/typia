import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { MapUnion } from "../../structures/MapUnion";

export const test_createAssert_MapUnion = _test_assert(TypeGuardError)(
  "MapUnion",
)<MapUnion>(MapUnion)(typia.createAssert<MapUnion>());
