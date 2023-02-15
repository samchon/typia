import typia from "typia";

import { MapUnion } from "../../structures/MapUnion";
import { _test_isClone } from "../internal/_test_isClone";

export const test_isClone_MapUnion = _test_isClone(
    "MapUnion",
    MapUnion.generate,
    (input) => typia.isClone(input),
    MapUnion.SPOILERS,
);
