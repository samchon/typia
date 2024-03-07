import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { MapUnion } from "../../structures/MapUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_MapUnion = _test_assert(CustomGuardError)(
  "MapUnion",
)<MapUnion>(MapUnion)((input) =>
  typia.assert<MapUnion>(input, (p) => new CustomGuardError(p)),
);
