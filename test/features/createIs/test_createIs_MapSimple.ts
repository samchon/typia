import typia from "typia";

import { MapSimple } from "../../structures/MapSimple";
import { _test_is } from "../internal/_test_is";

export const test_createIs_MapSimple = _test_is(
    "MapSimple",
    MapSimple.generate,
    typia.createIs<MapSimple>(),
    MapSimple.SPOILERS,
);
