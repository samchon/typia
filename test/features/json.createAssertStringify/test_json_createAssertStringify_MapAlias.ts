import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { MapAlias } from "../../structures/MapAlias";

export const test_json_assertStringify_MapAlias = _test_json_assertStringify(
    "MapAlias",
    MapAlias.generate,
    typia.json.createAssertStringify<MapAlias>(),
    MapAlias.SPOILERS,
);
