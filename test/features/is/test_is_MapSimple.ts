import TSON from "../../../src";
import { MapSimple } from "../../structures/MapSimple";
import { _test_is } from "../internal/_test_is";

export const test_is_MapSimple = _test_is(
    "MapSimple",
    MapSimple.generate,
    (input) => TSON.is(input),
    MapSimple.SPOILERS,
);