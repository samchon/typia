import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { MapUnion } from "../../structures/MapUnion";

export const test_assertClone_MapUnion = _test_assertClone(
    "MapUnion",
    MapUnion.generate,
    (input) => typia.assertClone<MapUnion>(input),
    MapUnion.SPOILERS,
);
