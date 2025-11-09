import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_ConstantIntersection = (): void => _test_assert(CustomGuardError)(
    "ConstantIntersection",
)<ConstantIntersection>(
    ConstantIntersection
)(typia.createAssert<ConstantIntersection>((p) => new CustomGuardError(p)));
