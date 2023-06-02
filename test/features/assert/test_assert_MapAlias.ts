import typia from "../../../src";

import { MapAlias } from "../../structures/MapAlias";
import { _test_assert } from "../../internal/_test_assert";

export const test_assert_MapAlias = _test_assert(
    "MapAlias",
    MapAlias.generate,
    (input) => typia.assert(input),
    MapAlias.SPOILERS,
);
