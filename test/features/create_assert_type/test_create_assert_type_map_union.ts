import TSON from "../../../src";
import { MapUnion } from "../../structures/MapUnion";
import { _test_assert_type } from "../internal/_test_assert_type";

export const test_create_assert_type_map_union = _test_assert_type(
    "union map",
    MapUnion.generate,
    TSON.createAssertType<MapUnion>(),
    MapUnion.SPOILERS,
);
