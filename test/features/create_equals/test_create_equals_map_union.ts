import TSON from "../../../src";
import { MapUnion } from "../../structures/MapUnion";
import { _test_equals } from "../internal/_test_equals";

export const test_create_equals_map_union = _test_equals(
    "union map",
    MapUnion.generate,
    TSON.createEquals<MapUnion>(),
    0,
);
