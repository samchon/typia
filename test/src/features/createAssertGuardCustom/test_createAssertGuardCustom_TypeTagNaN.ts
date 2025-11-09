import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_TypeTagNaN = (): void => _test_assertGuard(CustomGuardError)(
    "TypeTagNaN",
)<TypeTagNaN>(
    TypeTagNaN
)(typia.createAssertGuard<TypeTagNaN>((p) => new CustomGuardError(p)));
