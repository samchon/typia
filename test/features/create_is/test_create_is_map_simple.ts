import TSON from "../../../src";
import { MapSimple } from "../../structures/MapSimple";
import { _test_is } from "../internal/_test_is";

export const test_create_is_map_simple = _test_is(
    "simple map",
    MapSimple.generate,
    TSON.createIs<MapSimple>(),
    MapSimple.SPOILERS,
);
