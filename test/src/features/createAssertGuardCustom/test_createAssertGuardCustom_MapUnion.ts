import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { MapUnion } from "../../structures/MapUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_MapUnion = _test_assertGuard(CustomGuardError)(
    "MapUnion",
)<MapUnion>(
    MapUnion
)(typia.createAssertGuard<MapUnion>((p) => new CustomGuardError(p)));
