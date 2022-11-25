import TSON from "../../../src";
import { MapSimple } from "../../structures/MapSimple";
import { _test_is_stringify } from "../internal/_test_is_stringify";

export const test_is_stringify_map_simple = _test_is_stringify(
    "simple map",
    MapSimple.generate,
    (input) => TSON.isStringify(input),
    MapSimple.SPOILERS,
);
