import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { MapSimple } from "../../structures/MapSimple";

export const test_assertCustom_MapSimple = _test_assert(CustomGuardError)(
  "MapSimple",
)<MapSimple>(MapSimple)((input) =>
  typia.assert<MapSimple>(input, (p) => new CustomGuardError(p)),
);
