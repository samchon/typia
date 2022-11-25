import TSON from "../../../src";
import { MapSimple } from "../../structures/MapSimple";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_map_simple = _test_equals(
    "simple map",
    MapSimple.generate,
    (input) => TSON.equals(input),
);
