import typia from "typia";

import { MapSimple } from "../../structures/MapSimple";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_MapSimple = _test_assert(
    "MapSimple",
    MapSimple.generate,
    (input) => typia.assert(input),
    MapSimple.SPOILERS,
);
