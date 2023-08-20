import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { MapSimple } from "../../structures/MapSimple";

export const test_isStringify_MapSimple = _test_isStringify(
    "MapSimple",
    MapSimple.generate,
    (input) => typia.isStringify<MapSimple>(input),
    MapSimple.SPOILERS,
);
