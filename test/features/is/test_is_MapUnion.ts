import TSON from "../../../src";
import { MapUnion } from "../../structures/MapUnion";
import { _test_is } from "../internal/_test_is";

export const test_is_MapUnion = _test_is(
    "MapUnion",
    MapUnion.generate,
    (input) => TSON.is(input),
    MapUnion.SPOILERS,
);
