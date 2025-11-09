import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_ConstantIntersection = (): void => _test_assertGuard(CustomGuardError)(
    "ConstantIntersection",
)<ConstantIntersection>(
    ConstantIntersection
)((input) => typia.assertGuard<ConstantIntersection>(input, (p) => new CustomGuardError(p)));
