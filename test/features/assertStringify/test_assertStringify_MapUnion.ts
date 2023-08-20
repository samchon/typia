import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { MapUnion } from "../../structures/MapUnion";

export const test_assertStringify_MapUnion = _test_assertStringify(
    "MapUnion",
    MapUnion.generate,
    (input) => typia.assertStringify<MapUnion>(input),
    MapUnion.SPOILERS,
);
