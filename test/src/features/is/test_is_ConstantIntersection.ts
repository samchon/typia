import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_is_ConstantIntersection = (): void => _test_is(
    "ConstantIntersection",
)<ConstantIntersection>(
    ConstantIntersection
)((input) => typia.is<ConstantIntersection>(input));
