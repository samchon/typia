import TSON from "../../../src";
import { MapSimple } from "../../structures/MapSimple";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_MapSimple = _test_isStringify(
    "MapSimple",
    MapSimple.generate,
    TSON.createIsStringify<MapSimple>(),
    MapSimple.SPOILERS,
);