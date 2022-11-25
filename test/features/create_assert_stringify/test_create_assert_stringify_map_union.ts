import TSON from "../../../src";
import { MapUnion } from "../../structures/MapUnion";
import { _test_assert_stringify } from "../internal/_test_assert_stringify";

export const test_create_assert_stringify_map_union = _test_assert_stringify(
    "union map",
    MapUnion.generate,
    TSON.createAssertStringify<MapUnion>(),
    MapUnion.SPOILERS,
);
