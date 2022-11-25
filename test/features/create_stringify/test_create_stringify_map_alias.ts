import TSON from "../../../src";
import { MapAlias } from "../../structures/MapAlias";
import { _test_stringify } from "../internal/_test_stringify";

export const test_create_stringify_map_alias = _test_stringify(
    "aliased map",
    MapAlias.generate,
    TSON.createStringify<MapAlias>(),
);
