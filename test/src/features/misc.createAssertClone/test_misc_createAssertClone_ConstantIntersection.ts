import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

import { TypeGuardError } from "typia";

export const test_misc_createAssertClone_ConstantIntersection = (): void => _test_misc_assertClone(TypeGuardError)(
    "ConstantIntersection",
)<ConstantIntersection>(
    ConstantIntersection
)(typia.misc.createAssertClone<ConstantIntersection>());
