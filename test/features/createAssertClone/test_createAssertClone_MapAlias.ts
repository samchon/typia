import TSON from "../../../src";
import { MapAlias } from "../../structures/MapAlias";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_createAssertClone_MapAlias = _test_assertClone(
    "MapAlias",
    MapAlias.generate,
    TSON.createAssertClone<MapAlias>(),
    MapAlias.SPOILERS,
);
