import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { MapAlias } from "../../structures/MapAlias";

export const test_createIs_MapAlias = _test_is(
    "MapAlias",
    MapAlias.generate,
    typia.createIs<MapAlias>(),
    MapAlias.SPOILERS,
);
