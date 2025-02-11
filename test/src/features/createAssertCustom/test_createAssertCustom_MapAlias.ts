import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { MapAlias } from "../../structures/MapAlias";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_MapAlias = _test_assert(CustomGuardError)(
    "MapAlias",
)<MapAlias>(
    MapAlias
)(typia.createAssert<MapAlias>((p) => new CustomGuardError(p)));
