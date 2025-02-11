import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_equals_ConstantIntersection = _test_equals(
    "ConstantIntersection",
)<ConstantIntersection>(
    ConstantIntersection
)((input) => typia.equals<ConstantIntersection>(input));
