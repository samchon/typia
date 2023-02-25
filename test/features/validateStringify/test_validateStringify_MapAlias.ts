import typia from "../../../src";

import { MapAlias } from "../../structures/MapAlias";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_MapAlias = _test_validateStringify(
    "MapAlias",
    MapAlias.generate,
    (input) => typia.validateStringify(input),
    MapAlias.SPOILERS,
);
