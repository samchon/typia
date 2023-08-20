import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { MapUnion } from "../../structures/MapUnion";

export const test_validateClone_MapUnion = _test_validateClone(
    "MapUnion",
    MapUnion.generate,
    (input) => typia.validateClone<MapUnion>(input),
    MapUnion.SPOILERS,
);
