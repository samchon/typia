import typia from "../../../src";
import { MapUnion } from "../../structures/MapUnion";
import { _test_clone } from "../internal/_test_clone";

export const test_createClone_MapUnion = _test_clone(
    "MapUnion",
    MapUnion.generate,
    typia.createClone<MapUnion>(),
);
