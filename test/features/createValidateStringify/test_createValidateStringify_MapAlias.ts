import typia from "../../../src";

import { MapAlias } from "../../structures/MapAlias";
import { _test_validateStringify } from "../../internal/_test_validateStringify";

export const test_createValidateStringify_MapAlias = _test_validateStringify(
    "MapAlias",
    MapAlias.generate,
    typia.createValidateStringify<MapAlias>(),
    MapAlias.SPOILERS,
);
