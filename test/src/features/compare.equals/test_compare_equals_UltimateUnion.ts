import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_compare_equals_UltimateUnion = _test_compare_equals(
    "UltimateUnion",
)<UltimateUnion>(
    UltimateUnion
)((a, b) => typia.compare.equals<UltimateUnion>(a, b));
