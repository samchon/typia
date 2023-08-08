import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { MapUnion } from "../../structures/MapUnion";

export const test_misc_isClone_MapUnion = _test_misc_isClone(
    "MapUnion",
    MapUnion.generate,
    typia.misc.createIsClone<MapUnion>(),
    MapUnion.SPOILERS,
);
