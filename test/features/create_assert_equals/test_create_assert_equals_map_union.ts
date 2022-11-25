import TSON from "../../../src";
import { MapUnion } from "../../structures/MapUnion";
import { _test_assert_equals } from "../internal/_test_assert_equals";

export const test_create_assert_equals_map_union = _test_assert_equals(
    "union map",
    MapUnion.generate,
    TSON.createAssertEquals<MapUnion>(),
    false,
);
