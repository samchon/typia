import typia from "../../../src";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_misc_assertClone_ConstantIntersection = _test_misc_assertClone(
    "ConstantIntersection",
)<ConstantIntersection>(
    ConstantIntersection
)((input) => typia.misc.assertClone<ConstantIntersection>(input));
