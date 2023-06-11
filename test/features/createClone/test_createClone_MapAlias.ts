import typia from "../../../src";

import { MapAlias } from "../../structures/MapAlias";
import { _test_clone } from "../../internal/_test_clone";

export const test_createClone_MapAlias = _test_clone(
    "MapAlias",
    MapAlias.generate,
    typia.createClone<MapAlias>(),
);
