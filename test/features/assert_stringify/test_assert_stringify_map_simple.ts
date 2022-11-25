import TSON from "../../../src";
import { MapSimple } from "../../structures/MapSimple";
import { _test_assert_stringify } from "../internal/_test_assert_stringify";

export const test_assert_stringify_map_simple = _test_assert_stringify(
    "simple map",
    MapSimple.generate,
    (input) => TSON.assertStringify(input),
    MapSimple.SPOILERS,
);
