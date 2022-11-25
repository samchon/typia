import TSON from "../../../src";
import { MapAlias } from "../../structures/MapAlias";
import { _test_is_clone } from "../internal/_test_is_clone";

export const test_create_is_clone_map_alias = _test_is_clone(
    "aliased map",
    MapAlias.generate,
    TSON.createIsClone<MapAlias>(),
    MapAlias.SPOILERS,
);
