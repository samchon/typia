import TSON from "../../../src";
import { MapUnion } from "../../structures/MapUnion";
import { _test_is_stringify } from "../internal/_test_is_stringify";

export const test_create_is_stringify_map_union = _test_is_stringify(
    "union map",
    MapUnion.generate,
    TSON.createIsStringify<MapUnion>(),
    MapUnion.SPOILERS,
);
