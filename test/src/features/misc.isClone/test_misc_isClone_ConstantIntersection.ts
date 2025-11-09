import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_misc_isClone_ConstantIntersection = (): void => _test_misc_isClone(
    "ConstantIntersection",
)<ConstantIntersection>(
    ConstantIntersection
)((input) => typia.misc.isClone<ConstantIntersection>(input));
