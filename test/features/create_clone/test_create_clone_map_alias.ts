import TSON from "../../../src";
import { MapAlias } from "../../structures/MapAlias";
import { _test_clone } from "../internal/_test_clone";

export const test_create_clone_map_alias = _test_clone(
    "aliased map",
    MapAlias.generate,
    TSON.createClone<MapAlias>(),
);
