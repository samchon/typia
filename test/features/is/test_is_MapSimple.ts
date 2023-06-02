import typia from "../../../src";

import { MapSimple } from "../../structures/MapSimple";
import { _test_is } from "../../internal/_test_is";

export const test_is_MapSimple = _test_is(
    "MapSimple",
    MapSimple.generate,
    (input) => typia.is(input),
    MapSimple.SPOILERS,
);
