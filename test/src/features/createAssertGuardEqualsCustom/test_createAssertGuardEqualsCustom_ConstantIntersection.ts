import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardEqualsCustom_ConstantIntersection = (): void => _test_assertGuardEquals(CustomGuardError)(
    "ConstantIntersection",
)<ConstantIntersection>(
    ConstantIntersection
)(typia.createAssertGuardEquals<ConstantIntersection>((p) => new CustomGuardError(p)));
