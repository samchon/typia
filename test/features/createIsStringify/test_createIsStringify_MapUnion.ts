import typia from "typia";

import { MapUnion } from "../../structures/MapUnion";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_MapUnion = _test_isStringify(
    "MapUnion",
    MapUnion.generate,
    typia.createIsStringify<MapUnion>(),
    MapUnion.SPOILERS,
);
