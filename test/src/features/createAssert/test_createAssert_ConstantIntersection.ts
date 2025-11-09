import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

import { TypeGuardError } from "typia";

export const test_createAssert_ConstantIntersection = (): void => _test_assert(TypeGuardError)(
    "ConstantIntersection",
)<ConstantIntersection>(
    ConstantIntersection
)(typia.createAssert<ConstantIntersection>());
