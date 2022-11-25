import TSON from "../../../src";
import { MapSimple } from "../../structures/MapSimple";
import { _test_assert_equals } from "../internal/_test_assert_equals";

export const test_assert_equals_map_simple = _test_assert_equals(
    "simple map",
    MapSimple.generate,
    (input) => TSON.assertEquals(input),
    false,
);
