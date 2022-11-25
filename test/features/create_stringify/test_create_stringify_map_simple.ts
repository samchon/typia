import TSON from "../../../src";
import { MapSimple } from "../../structures/MapSimple";
import { _test_stringify } from "../internal/_test_stringify";

export const test_create_stringify_map_simple = _test_stringify(
    "simple map",
    MapSimple.generate,
    TSON.createStringify<MapSimple>(),
);
