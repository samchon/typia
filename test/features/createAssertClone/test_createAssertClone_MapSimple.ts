import typia from "typia";

import { MapSimple } from "../../structures/MapSimple";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_createAssertClone_MapSimple = _test_assertClone(
    "MapSimple",
    MapSimple.generate,
    typia.createAssertClone<MapSimple>(),
    MapSimple.SPOILERS,
);
