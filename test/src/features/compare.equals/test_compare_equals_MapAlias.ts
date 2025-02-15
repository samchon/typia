import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { MapAlias } from "../../structures/MapAlias";

export const test_compare_equals_MapAlias = _test_compare_equals(
    "MapAlias",
)<MapAlias>(
    MapAlias
)((a, b) => typia.compare.equals<MapAlias>(a, b));
