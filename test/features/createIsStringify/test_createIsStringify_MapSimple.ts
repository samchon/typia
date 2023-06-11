import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { MapSimple } from "../../structures/MapSimple";

export const test_createIsStringify_MapSimple = _test_isStringify(
    "MapSimple",
    MapSimple.generate,
    typia.createIsStringify<MapSimple>(),
    MapSimple.SPOILERS,
);
