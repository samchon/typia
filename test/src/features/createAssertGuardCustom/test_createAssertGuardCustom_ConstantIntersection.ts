import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_ConstantIntersection = (): void => _test_assertGuard(CustomGuardError)(
    "ConstantIntersection",
)<ConstantIntersection>(
    ConstantIntersection
)(typia.createAssertGuard<ConstantIntersection>((p) => new CustomGuardError(p)));
