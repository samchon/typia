import typia from "../../../src";

import { MapUnion } from "../../structures/MapUnion";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_MapUnion = _test_assertStringify(
    "MapUnion",
    MapUnion.generate,
    typia.createAssertStringify<MapUnion>(),
    MapUnion.SPOILERS,
);
