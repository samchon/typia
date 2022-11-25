import TSON from "../../../src";
import { MapSimple } from "../../structures/MapSimple";
import { _test_assert_type } from "../internal/_test_assert_type";

export const test_assert_type_map_simple = _test_assert_type(
    "simple map",
    MapSimple.generate,
    (input) => TSON.assertType(input),
    MapSimple.SPOILERS,
);
