import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { MapUnion } from "../../structures/MapUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_MapUnion = _test_assert(CustomGuardError)(
    "MapUnion",
)<MapUnion>(
    MapUnion
)(typia.createAssert<MapUnion>((p) => new CustomGuardError(p)));
