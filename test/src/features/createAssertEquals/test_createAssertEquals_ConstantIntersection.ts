import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

import { TypeGuardError } from "typia";

export const test_createAssertEquals_ConstantIntersection = _test_assertEquals(TypeGuardError)(
    "ConstantIntersection",
)<ConstantIntersection>(
    ConstantIntersection
)(typia.createAssertEquals<ConstantIntersection>());
