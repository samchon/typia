import TSON from "../../../src";
import { MapAlias } from "../../structures/MapAlias";
import { _test_assert_equals } from "../internal/_test_assert_equals";

export const test_create_assert_equals_map_alias = _test_assert_equals(
    "aliased map",
    MapAlias.generate,
    TSON.createAssertEquals<MapAlias>(),
    false,
);
