import typia from "../../../src";

import { MapUnion } from "../../structures/MapUnion";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_MapUnion = _test_validateStringify(
    "MapUnion",
    MapUnion.generate,
    typia.createValidateStringify<MapUnion>(),
    MapUnion.SPOILERS,
);
