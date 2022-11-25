import TSON from "../../../src";
import { MapSimple } from "../../structures/MapSimple";
import { _test_clone } from "../internal/_test_clone";

export const test_create_clone_map_simple = _test_clone(
    "simple map",
    MapSimple.generate,
    TSON.createClone<MapSimple>(),
);
