import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { MapSimple } from "../../structures/MapSimple";

export const test_createAssertStringify_MapSimple = _test_assertStringify(
    "MapSimple",
    MapSimple.generate,
    typia.createAssertStringify<MapSimple>(),
    MapSimple.SPOILERS,
);
