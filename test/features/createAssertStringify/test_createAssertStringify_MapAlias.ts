import typia from "../../../src";
import { MapAlias } from "../../structures/MapAlias";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_MapAlias = _test_assertStringify(
    "MapAlias",
    MapAlias.generate,
    typia.createAssertStringify<MapAlias>(),
    MapAlias.SPOILERS,
);