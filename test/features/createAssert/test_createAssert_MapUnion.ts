import typia from "../../../src";

import { _test_assert } from "../../internal/_test_assert";
import { MapUnion } from "../../structures/MapUnion";

export const test_createAssert_MapUnion = _test_assert(
    "MapUnion",
)<MapUnion>(
    MapUnion
)(typia.createAssert<MapUnion>());
