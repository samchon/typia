import TSON from "../../../src";
import { MapSimple } from "../../structures/MapSimple";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_MapSimple = _test_assert(
    "MapSimple",
    MapSimple.generate,
    (input) => TSON.assert(input),
    MapSimple.SPOILERS,
);