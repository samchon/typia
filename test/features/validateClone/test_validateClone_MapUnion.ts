import typia from "../../../src";
import { MapUnion } from "../../structures/MapUnion";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_validateClone_MapUnion = _test_validateClone(
    "MapUnion",
    MapUnion.generate,
    (input) => typia.validateClone(input),
    MapUnion.SPOILERS,
);
