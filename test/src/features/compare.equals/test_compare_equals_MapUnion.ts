import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { MapUnion } from "../../structures/MapUnion";

export const test_compare_equals_MapUnion = _test_compare_equals(
    "MapUnion",
)<MapUnion>(
    MapUnion
)((a, b) => typia.compare.equals<MapUnion>(a, b));
