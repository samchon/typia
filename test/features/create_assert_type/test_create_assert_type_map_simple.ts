import TSON from "../../../src";
import { MapSimple } from "../../structures/MapSimple";
import { _test_assert_type } from "../internal/_test_assert_type";

export const test_create_assert_type_map_simple = _test_assert_type(
    "simple map",
    MapSimple.generate,
    TSON.createAssertType<MapSimple>(),
    MapSimple.SPOILERS,
);
