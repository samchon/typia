import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { MapUnion } from "../../structures/MapUnion";

export const test_createIsStringify_MapUnion = _test_isStringify(
    "MapUnion",
    MapUnion.generate,
    typia.createIsStringify<MapUnion>(),
    MapUnion.SPOILERS,
);
