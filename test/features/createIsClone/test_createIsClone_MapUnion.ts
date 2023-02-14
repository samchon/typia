import typia from "../../../src";
import { MapUnion } from "../../structures/MapUnion";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_MapUnion = _test_isClone(
    "MapUnion",
    MapUnion.generate,
    typia.createIsClone<MapUnion>(),
    MapUnion.SPOILERS,
);