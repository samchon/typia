import typia from "typia";

import { MapAlias } from "../../structures/MapAlias";
import { _test_stringify } from "../internal/_test_stringify";

export const test_createStringify_MapAlias = _test_stringify(
    "MapAlias",
    MapAlias.generate,
    typia.createStringify<MapAlias>(),
);
