import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { MapSimple } from "../../structures/MapSimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_MapSimple = _test_assert(CustomGuardError)(
    "MapSimple",
)<MapSimple>(
    MapSimple
)(typia.createAssert<MapSimple>((p) => new CustomGuardError(p)));
