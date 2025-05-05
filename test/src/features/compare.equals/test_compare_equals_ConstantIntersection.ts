import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_compare_equals_ConstantIntersection = _test_compare_equals(
    "ConstantIntersection",
)<ConstantIntersection>(
    ConstantIntersection
)((a, b) => typia.compare.equals<ConstantIntersection>(a, b));
