import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagArray } from "../../structures/TypeTagArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_TypeTagArray = (): void => _test_assertGuard(CustomGuardError)(
    "TypeTagArray",
)<TypeTagArray>(
    TypeTagArray
)(typia.createAssertGuard<TypeTagArray>((p) => new CustomGuardError(p)));
