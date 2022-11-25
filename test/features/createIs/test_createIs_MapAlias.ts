import TSON from "../../../src";
import { MapAlias } from "../../structures/MapAlias";
import { _test_is } from "../internal/_test_is";

export const test_createIs_MapAlias = _test_is(
    "MapAlias",
    MapAlias.generate,
    TSON.createIs<MapAlias>(),
    MapAlias.SPOILERS,
);
