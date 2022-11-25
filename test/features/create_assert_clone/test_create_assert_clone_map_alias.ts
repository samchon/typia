import TSON from "../../../src";
import { MapAlias } from "../../structures/MapAlias";
import { _test_assert_clone } from "../internal/_test_assert_clone";

export const test_create_assert_clone_map_alias = _test_assert_clone(
    "aliased map",
    MapAlias.generate,
    TSON.createAssertClone<MapAlias>(),
    MapAlias.SPOILERS,
);
