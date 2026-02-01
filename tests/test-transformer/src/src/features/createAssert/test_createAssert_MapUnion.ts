import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { MapUnion } from "../../structures/MapUnion";

import { TypeGuardError } from "typia";

export const test_createAssert_MapUnion = (): void => _test_assert(TypeGuardError)(
    "MapUnion",
)<MapUnion>(
    MapUnion
)(typia.createAssert<MapUnion>());
