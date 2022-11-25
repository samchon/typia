import TSON from "../../../src";
import { MapSimple } from "../../structures/MapSimple";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_map_simple = _test_stringify(
    "simple map",
    MapSimple.generate,
    (input) => TSON.stringify(input),
);
