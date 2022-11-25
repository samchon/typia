import TSON from "../../../src";
import { MapUnion } from "../../structures/MapUnion";
import { _test_stringify } from "../internal/_test_stringify";

export const test_createStringify_MapUnion = _test_stringify(
    "MapUnion",
    MapUnion.generate,
    TSON.createStringify<MapUnion>(),
);