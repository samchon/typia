import TSON from "../../../src";
import { MapSimple } from "../../structures/MapSimple";
import { _test_clone } from "../internal/_test_clone";

export const test_createClone_MapSimple = _test_clone(
    "MapSimple",
    MapSimple.generate,
    TSON.createClone<MapSimple>(),
);