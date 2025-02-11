import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { MapAlias } from "../../structures/MapAlias";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_MapAlias = _test_assertGuard(CustomGuardError)(
    "MapAlias",
)<MapAlias>(
    MapAlias
)((input) => typia.assertGuard<MapAlias>(input, (p) => new CustomGuardError(p)));
