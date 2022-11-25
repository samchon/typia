import TSON from "../../../src";
import { MapSimple } from "../../structures/MapSimple";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_isStringify_MapSimple = _test_isStringify(
    "MapSimple",
    MapSimple.generate,
    (input) => TSON.isStringify(input),
    MapSimple.SPOILERS,
);
