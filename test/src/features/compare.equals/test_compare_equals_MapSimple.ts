import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { MapSimple } from "../../structures/MapSimple";

export const test_compare_equals_MapSimple = _test_compare_equals(
    "MapSimple",
)<MapSimple>(
    MapSimple
)((a, b) => typia.compare.equals<MapSimple>(a, b));
