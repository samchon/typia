import typia from "../../../src";

import { MapUnion } from "../../structures/MapUnion";
import { _test_assert } from "../../internal/_test_assert";

export const test_createAssert_MapUnion = _test_assert(
    "MapUnion",
    MapUnion.generate,
    typia.createAssert<MapUnion>(),
    MapUnion.SPOILERS,
);
