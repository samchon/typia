import typia from "../../../src";

import { MapSimple } from "../../structures/MapSimple";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_MapSimple = _test_assert(
    "MapSimple",
    MapSimple.generate,
    typia.createAssert<MapSimple>(),
    MapSimple.SPOILERS,
);
