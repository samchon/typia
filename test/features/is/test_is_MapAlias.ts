import typia from "../../../src";

import { MapAlias } from "../../structures/MapAlias";
import { _test_is } from "../../internal/_test_is";

export const test_is_MapAlias = _test_is(
    "MapAlias",
    MapAlias.generate,
    (input) => typia.is(input),
    MapAlias.SPOILERS,
);
