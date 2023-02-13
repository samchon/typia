import typia from "../../../src";
import { MapUnion } from "../../structures/MapUnion";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_createValidateClone_MapUnion = _test_validateClone(
    "MapUnion",
    MapUnion.generate,
    typia.createValidateClone<MapUnion>(),
    MapUnion.SPOILERS,
);