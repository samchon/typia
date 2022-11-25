import TSON from "../../../src";
import { MapUnion } from "../../structures/MapUnion";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_isStringify_MapUnion = _test_isStringify(
    "MapUnion",
    MapUnion.generate,
    (input) => TSON.isStringify(input),
    MapUnion.SPOILERS,
);