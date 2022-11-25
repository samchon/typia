import TSON from "../../../src";
import { MapSimple } from "../../structures/MapSimple";
import { _test_assert_clone } from "../internal/_test_assert_clone";

export const test_create_assert_clone_map_simple = _test_assert_clone(
    "simple map",
    MapSimple.generate,
    TSON.createAssertClone<MapSimple>(),
    MapSimple.SPOILERS,
);
