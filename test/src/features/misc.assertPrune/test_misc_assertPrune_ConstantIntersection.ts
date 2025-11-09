import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

import { TypeGuardError } from "typia";

export const test_misc_assertPrune_ConstantIntersection = (): void => _test_misc_assertPrune(TypeGuardError)(
    "ConstantIntersection",
)<ConstantIntersection>(
    ConstantIntersection
)((input) => typia.misc.assertPrune<ConstantIntersection>(input));
