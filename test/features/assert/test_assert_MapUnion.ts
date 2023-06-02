import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { MapUnion } from "../../structures/MapUnion";

export const test_assert_MapUnion = _test_assert(
    "MapUnion",
    MapUnion.generate,
    (input) => typia.assert(input),
    MapUnion.SPOILERS,
);
