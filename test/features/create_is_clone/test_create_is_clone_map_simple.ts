import TSON from "../../../src";
import { MapSimple } from "../../structures/MapSimple";
import { _test_is_clone } from "../internal/_test_is_clone";

export const test_create_is_clone_map_simple = _test_is_clone(
    "simple map",
    MapSimple.generate,
    TSON.createIsClone<MapSimple>(),
    MapSimple.SPOILERS,
);
