import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { MapUnion } from "../../structures/MapUnion";

export const test_createAssertCustom_MapUnion = _test_assert(CustomGuardError)(
  "MapUnion",
)<MapUnion>(MapUnion)(
  typia.createAssert<MapUnion>((p) => new CustomGuardError(p)),
);
