import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { MapAlias } from "../../structures/MapAlias";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_MapAlias = _test_assert(CustomGuardError)(
  "MapAlias",
)<MapAlias>(MapAlias)((input) =>
  typia.assert<MapAlias>(input, (p) => new CustomGuardError(p)),
);
