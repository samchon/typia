import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_TypeTagInfinite = (): void => _test_assertGuard(CustomGuardError)(
    "TypeTagInfinite",
)<TypeTagInfinite>(
    TypeTagInfinite
)((input) => typia.assertGuard<TypeTagInfinite>(input, (p) => new CustomGuardError(p)));
