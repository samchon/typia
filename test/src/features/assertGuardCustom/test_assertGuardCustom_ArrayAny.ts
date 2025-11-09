import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArrayAny } from "../../structures/ArrayAny";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_ArrayAny = (): void => _test_assertGuard(CustomGuardError)(
    "ArrayAny",
)<ArrayAny>(
    ArrayAny
)((input) => typia.assertGuard<ArrayAny>(input, (p) => new CustomGuardError(p)));
