import TSON from "../../../src";
import { MapAlias } from "../../structures/MapAlias";
import { _test_is } from "../internal/_test_is";

export const test_create_is_map_alias = _test_is(
    "aliased map",
    MapAlias.generate,
    TSON.createIs<MapAlias>(),
    MapAlias.SPOILERS,
);
