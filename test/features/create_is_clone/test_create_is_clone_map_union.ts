import TSON from "../../../src";
import { MapUnion } from "../../structures/MapUnion";
import { _test_is_clone } from "../internal/_test_is_clone";

export const test_create_is_clone_map_union = _test_is_clone(
    "union map",
    MapUnion.generate,
    TSON.createIsClone<MapUnion>(),
    MapUnion.SPOILERS,
);
