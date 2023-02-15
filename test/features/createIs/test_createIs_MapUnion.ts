import typia from "typia";

import { MapUnion } from "../../structures/MapUnion";
import { _test_is } from "../internal/_test_is";

export const test_createIs_MapUnion = _test_is(
    "MapUnion",
    MapUnion.generate,
    typia.createIs<MapUnion>(),
    MapUnion.SPOILERS,
);
