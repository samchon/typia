import typia from "../../../src";

import { MapAlias } from "../../structures/MapAlias";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_validateClone_MapAlias = _test_validateClone(
    "MapAlias",
    MapAlias.generate,
    (input) => typia.validateClone(input),
    MapAlias.SPOILERS,
);
