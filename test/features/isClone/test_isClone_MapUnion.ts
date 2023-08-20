import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { MapUnion } from "../../structures/MapUnion";

export const test_isClone_MapUnion = _test_isClone(
    "MapUnion",
    MapUnion.generate,
    (input) => typia.isClone<MapUnion>(input),
    MapUnion.SPOILERS,
);
