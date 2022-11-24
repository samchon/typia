import TSON from "../../../src";
import { MapUnion } from "../../structures/MapUnion";
import { _test_is } from "../internal/_test_is";

export const test_create_is_map_union = _test_is(
    "union map",
    MapUnion.generate,
    TSON.createIs<MapUnion>(),
    MapUnion.SPOILERS,
);
