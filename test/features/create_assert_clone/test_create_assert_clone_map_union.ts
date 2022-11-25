import TSON from "../../../src";
import { MapUnion } from "../../structures/MapUnion";
import { _test_assert_clone } from "../internal/_test_assert_clone";

export const test_create_assert_clone_map_union = _test_assert_clone(
    "union map",
    MapUnion.generate,
    TSON.createAssertClone<MapUnion>(),
    MapUnion.SPOILERS,
);
