import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { MapUnion } from "../../structures/MapUnion";

export const test_createAssertStringify_MapUnion = _test_assertStringify(
    "MapUnion",
    MapUnion.generate,
    typia.createAssertStringify<MapUnion>(),
    MapUnion.SPOILERS,
);
