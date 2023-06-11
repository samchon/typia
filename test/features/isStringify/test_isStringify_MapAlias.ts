import typia from "../../../src";

import { MapAlias } from "../../structures/MapAlias";
import { _test_isStringify } from "../../internal/_test_isStringify";

export const test_isStringify_MapAlias = _test_isStringify(
    "MapAlias",
    MapAlias.generate,
    (input) => typia.isStringify(input),
    MapAlias.SPOILERS,
);
