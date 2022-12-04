import TSON from "../../../src";
import { MapSimple } from "../../structures/MapSimple";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_createValidateClone_MapSimple = _test_validateClone(
    "MapSimple",
    MapSimple.generate,
    TSON.createValidateClone<MapSimple>(),
    MapSimple.SPOILERS,
);
