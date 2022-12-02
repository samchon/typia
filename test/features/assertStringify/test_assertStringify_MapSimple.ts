import TSON from "../../../src";
import { MapSimple } from "../../structures/MapSimple";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_MapSimple = _test_assertStringify(
    "MapSimple",
    MapSimple.generate,
    (input) => TSON.assertStringify(input),
    MapSimple.SPOILERS,
);
