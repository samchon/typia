import TSON from "../../../src";
import { MapSimple } from "../../structures/MapSimple";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_map_simple = _test_assert(
    "simple map",
    MapSimple.generate,
    (input) => TSON.assert(input),
    MapSimple.SPOILERS,
);
