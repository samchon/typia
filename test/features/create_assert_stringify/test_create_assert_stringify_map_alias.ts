import TSON from "../../../src";
import { MapAlias } from "../../structures/MapAlias";
import { _test_assert_stringify } from "../internal/_test_assert_stringify";

export const test_create_assert_stringify_map_alias = _test_assert_stringify(
    "aliased map",
    MapAlias.generate,
    TSON.createAssertStringify<MapAlias>(),
    MapAlias.SPOILERS,
);
