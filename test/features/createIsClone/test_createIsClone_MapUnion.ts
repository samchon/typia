import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { MapUnion } from "../../structures/MapUnion";

export const test_createIsClone_MapUnion = _test_isClone(
    "MapUnion",
    MapUnion.generate,
    typia.createIsClone<MapUnion>(),
    MapUnion.SPOILERS,
);
