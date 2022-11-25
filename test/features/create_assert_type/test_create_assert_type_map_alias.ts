import TSON from "../../../src";
import { MapAlias } from "../../structures/MapAlias";
import { _test_assert_type } from "../internal/_test_assert_type";

export const test_create_assert_type_map_alias = _test_assert_type(
    "aliased map",
    MapAlias.generate,
    TSON.createAssertType<MapAlias>(),
    MapAlias.SPOILERS,
);
