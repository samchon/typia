import typia from "../../../src";

import { MapAlias } from "../../structures/MapAlias";
import { _test_assertClone } from "../../internal/_test_assertClone";

export const test_assertClone_MapAlias = _test_assertClone(
    "MapAlias",
    MapAlias.generate,
    (input) => typia.assertClone(input),
    MapAlias.SPOILERS,
);
