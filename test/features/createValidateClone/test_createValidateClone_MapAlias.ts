import TSON from "../../../src";
import { MapAlias } from "../../structures/MapAlias";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_createValidateClone_MapAlias = _test_validateClone(
    "MapAlias",
    MapAlias.generate,
    TSON.createValidateClone<MapAlias>(),
    MapAlias.SPOILERS,
);
