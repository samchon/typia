import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { MapSimple } from "../../structures/MapSimple";

export const test_json_assertStringify_MapSimple = _test_json_assertStringify(
    "MapSimple",
    MapSimple.generate,
    typia.json.createAssertStringify<MapSimple>(),
    MapSimple.SPOILERS,
);
