import typia from "../../../src";

import { MapSimple } from "../../structures/MapSimple";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_assertClone_MapSimple = _test_assertClone(
    "MapSimple",
    MapSimple.generate,
    (input) => typia.assertClone(input),
    MapSimple.SPOILERS,
);
