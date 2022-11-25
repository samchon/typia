import TSON from "../../../src";
import { MapSimple } from "../../structures/MapSimple";
import { _test_isClone } from "../internal/_test_isClone";

export const test_isClone_MapSimple = _test_isClone(
    "MapSimple",
    MapSimple.generate,
    (input) => TSON.isClone(input),
    MapSimple.SPOILERS,
);