import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { MapAlias } from "../../structures/MapAlias";

export const test_createClone_MapAlias = _test_clone(
    "MapAlias",
    MapAlias.generate,
    typia.createClone<MapAlias>(),
);
