import TSON from "../../../src";
import { MapUnion } from "../../structures/MapUnion";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_MapUnion = _test_assert(
    "MapUnion",
    MapUnion.generate,
    (input) => TSON.assert(input),
    MapUnion.SPOILERS,
);