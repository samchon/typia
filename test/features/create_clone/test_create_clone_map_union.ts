import TSON from "../../../src";
import { MapUnion } from "../../structures/MapUnion";
import { _test_clone } from "../internal/_test_clone";

export const test_create_clone_map_union = _test_clone(
    "union map",
    MapUnion.generate,
    TSON.createClone<MapUnion>(),
);
